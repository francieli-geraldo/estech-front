export class Notify { 

    constructor(opt){
        var self = this;

        this._maskElement = null;
        this._boxElement = null;
        this._titleElement = null;
        this._closeElement = null;
        this._messages = null;
        this._contentElement = null;
        this._yesElement = null;
        this._noElement = null;

        var value_m = 10;
        if (value_m != 0 && value_m != null) {
            opt.timeout = value_m;
        } else {
            opt.timeout = 0;
        }
        
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

        this._createBox();
        this._createContent();
        this._createTypeElement();

    }

    _createBox() {

        this._boxElement = document.createElement('div');
        this._boxElement.className = 'alert alert-' + this.type;
        this._boxElement.style.position = 'absolute';
        this._boxElement.style.bottom = '10px';
        this._boxElement.style.right = '10px';
        this._boxElement.style.maxHeight = '50%';
        this._boxElement.style.maxWidth = '50%';
        this._boxElement.style.minWidth = '300px';
        this._boxElement.style.zIndex = '90001';
        this._boxElement.style.borderWidth = '3px';
        this._boxElement.style.borderRadius = '10px 7px';

        var self = this;
        this._boxElement.addEventListener('click', function () {
            self.hide();
        });

    }

    _createTypeElement() {

        var typeHeader = document.createElement('div');
        typeHeader.className = 'row m-0 w-100';
        typeHeader.style.height = '5px';
        

        this.typeElement = document.createElement('div');
        this.typeElement.className = `bg-white rounded-bottom rounded-top`;
        this.typeElement.style.height = '100%';
        this.typeElement.style.width = '100%';

        typeHeader.append(this.typeElement);
        this._boxElement.append(typeHeader);

    }

    _createContent() {

        var contentContainer = document.createElement('div');
        contentContainer.className = 'mb-3 row m-0 w-100';

        this._contentElement = document.createElement('div');
        this._contentElement.className = 'col pl-1';
        this._contentElement.innerHTML = this.message;

        contentContainer.append(this._contentElement);
        this._boxElement.append(contentContainer);

    }

    show() {

        var body = document.getElementsByTagName('body')[0];
        body.append(this._boxElement);
        if (this._maskElement) this._maskElement.getElementsByTagName("button")[0].focus();
        // this._saveMessage();

    }

    hide() {

        clearInterval(this._progressBarInterval);
        clearInterval(this._timeoutInterval);

        let parent = this._boxElement.parentElement;
        parent.removeChild(this._boxElement);

    }
}