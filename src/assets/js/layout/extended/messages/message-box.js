export class  MessageBox { 

    constructor(opt){
        
        var value_m = 10;
        if (value_m != 0 && value_m != null) {
            opt.timeout = value_m;
        } else {
            opt.timeout = 0;
        }

        var self = this;

        this._maskElement = null;
        this._boxElement = null;
        this._titleElement = null;
        this._closeElement = null;
        this._messages = null;
        this._contentElement = null;
        this._yesElement = null;
        this._noElement = null;

        this._buttons = opt.buttons || {
            yes: {
                text: 'OK',
                fnc: function () { self.hide(); }
            }
        }
        this._closable = opt.closable === undefined ? true : opt.closable;

        this.opt = opt || {};

        this.title = opt.title || 'Mensagem';
        this.message = opt.message;
        this.time = Date.now();
        this.type = opt.type || 'info';
        this.timeout = 10 || null;
        this._progressBarInterval = null;
        this._timeoutInterval = null;
        this._errorHandler();
        this._initializers();
    }

    _initializers() {
        this._timeOutInit();
        this._initialize();
    }

    _errorHandler() {
        if (!this.message) {
            throw ('The "message" property is mandatory');
        }

        switch (this.type) {
            case 'success':
            case 'danger':
            case 'warning':
            case 'info':
                break;
            default:
                throw ('Unknown type: "' + this.type + '"; Set as: success, danger, warning or info');
        }
    }

    _timeOutInit() {
        if (this.timeout && Number.isInteger(parseInt(this.timeout)) && this.timeout != 0) {
            var self = this;
            var length = 1000;

            this._progressBarInterval = setInterval(function () {
                self.typeElement.style.width = (--length) / 10 + '%';
            }, this.timeout);

            this._timeoutInterval = setTimeout(function () {
                self.hide();
            }, this.timeout * 1000);
        }
    }

    _saveMessage() {
        this._readMessages();
        var message = {
            title: this.title,
            message: this.message,
            text: this.text,
            time: this.time,
            type: this.type
        }
        this._messages.push(message);
        this._writeMessages();
    }

    _writeMessages() {
        localStorage.setItem('messages', JSON.stringify(this._messages));
    }

    _readMessages() {
        var messages = localStorage.getItem('messages');
        this._messages = JSON.parse(messages);

        if (!this._messages) {
            this._messages = [];
        }
    }

    _initialize() {

        this._createMask();
        this._createBox();

        this._createHeader();
        this._createContent();
        this._createButtons();
        this._createTypeElement();
        this._registerEvents();

    }

    _createMask() {

        this._maskElement = document.createElement('div');
        this._maskElement.style.position = 'absolute';
        this._maskElement.style.top = '0';
        this._maskElement.style.left = '0';
        this._maskElement.style.width = '100%';
        this._maskElement.style.height = '100%';
        this._maskElement.style.background = 'rgba(0,0,0,.7)';
        this._maskElement.style.zIndex = '90000';

    }

    _createBox() {

        this._boxElement = document.createElement('div');
        //this._boxElement.className = 'border border-' + this.type;
        this._boxElement.style.position = 'absolute';
        this._boxElement.style.top = '50%';
        this._boxElement.style.left = '50%';
        this._boxElement.style.transform = 'translate(-50%,-50%)';
        this._boxElement.style.background = '#fff';
        this._boxElement.style.maxHeight = '50%';
        this._boxElement.style.maxWidth = '50%';
        this._boxElement.style.minWidth = '300px';
        this._boxElement.style.zIndex = '90001';
        this._boxElement.style.borderWidth = '3px';
        this._boxElement.style.borderRadius = '10px 7px';
        this._maskElement.appendChild(this._boxElement);

    }

    _createTypeElement() {

        var typeHeader = document.createElement('div');
        typeHeader.className = 'row m-0 w-100';
        typeHeader.style.height = '7px';

        this.typeElement = document.createElement('div');
        this.typeElement.className = `bg-${this.type} rounded-top rounded-bottom`;
        this.typeElement.style.height = '100%';
        this.typeElement.style.width = '100%';

        typeHeader.appendChild(this.typeElement);
        this._boxElement.appendChild(typeHeader);

    }

    _createHeader() {

        var header = document.createElement('div');
        header.className = 'row m-0 w-100';

        var titleContainer = document.createElement('div');
        titleContainer.className = 'col p-3 text-truncate';
        this._titleElement = document.createElement('h5');
        this._titleElement.innerText = this.title;
        titleContainer.appendChild(this._titleElement);
        header.appendChild(titleContainer);

        if (this._closable) {

            this._closeElement = document.createElement('div');
            this._closeElement.className = 'col-2 p-3 text-right';
            this._closeElement.innerHTML = '<h5>&times;</h5>';
            this._closeElement.style.cursor = 'pointer';
            header.appendChild(this._closeElement);

            this._closeElement.addEventListener('click', function () {
                self.hide();
            });

        }

        this._boxElement.appendChild(header);

    }

    _createContent() {

        var contentContainer = document.createElement('div');
        contentContainer.className = 'row m-0 w-100';

        this._contentElement = document.createElement('div');
        this._contentElement.className = 'col pl-3 pr-3 pb-3 pt-0';
        this._contentElement.innerHTML = this.message;

        contentContainer.appendChild(this._contentElement);
        this._boxElement.appendChild(contentContainer);

    }

    _createButtons() {

        var buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'row m-0 w-100 text-right';

        var colContainer = document.createElement('div');
        colContainer.className = 'col p-3';

        if (this._buttons.no) {

            this._noElement = document.createElement('button');
            this._noElement.type = 'button';
            this._noElement.className = 'btn btn-sm btn-secondary';
            this._noElement.innerHTML = this._buttons.no.text || 'Cancelar';
            colContainer.appendChild(this._noElement);

            if (this._buttons.no.fnc) {
                this._noElement.addEventListener('click', this._buttons.no.fnc);
            }

        }

        if (this._buttons.yes) {
            this._yesElement = document.createElement('button');
            this._yesElement.type = 'button';
            this._yesElement.className = 'btn btn-sm ml-1 btn-' + this.type;
            this._yesElement.innerHTML = this._buttons.yes.text || 'Confirmar';
            colContainer.appendChild(this._yesElement);
            if (this._buttons.yes.fnc) {
                this._yesElement.addEventListener('click', this._buttons.yes.fnc);
            }
        }

        if (this._buttons.yes || this._buttons.no) {
            buttonsContainer.appendChild(colContainer);
            this._boxElement.appendChild(buttonsContainer);
        }
    }

    _registerEvents() {
        var self = this;
    }

    show() {

        var body = document.getElementsByTagName('body')[0];
        body.appendChild(this._maskElement);
        this._maskElement.getElementsByTagName("button")[0].focus();
        this._saveMessage();

    }

    hide() {
        clearInterval(this._progressBarInterval);
        clearInterval(this._timeoutInterval);
        var body = document.getElementsByTagName('body')[0];
        body.removeChild(this._maskElement);
        if (this.opt.callback) {
            var waiter = setTimeout(() => {
                this.opt.callback();
                clearTimeout(waiter);
            }, 200);
        }
    }

}

export default MessageBox;