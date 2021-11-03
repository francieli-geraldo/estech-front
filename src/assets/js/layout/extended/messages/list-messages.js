
var ListMessages = function () {

    function ListMessages(opt) {

        if (!opt) {
            throw ("Invalid element for ListMessages");
        }
        this._target = opt;
        this._messages = null;

        this._writeMessagesElements();

    }

    ListMessages.prototype._readListMessages = function () {

        var messages = localStorage.getItem('messages');
        this._messages = JSON.parse(messages);

        if (!this._messages) {
            this._messages = [];
        }

    };

    ListMessages.prototype._writeMessagesElements = function () {

        this._readListMessages();

        this._container = document.getElementById(this._target);
        this._container.innerHTML = '';

        for (var i = 0; i < this._messages.length; i++) {
            var message = this._messages[i];
            this._createMsgElement(message, i);
        }

        if (this._messages.length === 0) {
            document.getElementById('notifyIcon').style.display = 'none';
            document.getElementById('messages-content').style.display = 'none';
        } else {
            document.getElementById('notifyIcon').style.display = 'flex';
            document.getElementById('messages-content').style.display = 'flex';
        }
    };

    ListMessages.prototype._createMsgElement = function (message, i) {

        var msgElement = document.createElement('li');
        msgElement.setAttribute('data-index', i);

        msgElement.innerHTML = '' +
            '<div class="alert alert-' + message.type + '" style="cursor: pointer">' +
            '    <div class="d-flex w-100 justify-content-between">' +
            '       <h6 class="mb-1 text-' + message.type + '">' + message.title + '</h6>' +
            '       <div>' +
            '           <small>' + this._formatDate(message.time) + '</small> ' +
            '           <a class="close-msg" style="color: #f75159;font-weight: 600;margin-left: 10px;">x</a> ' +
            '       </div>' +
            '    </div> ' +
            '    <p class="mb-1 text-left">' + message.message + '</p>' +
            '    <a class="msg-details no-select" style="text-decoration: underline;">Detalhes</a>' +
            '    <div id="msg-details-' + i + '" class="mt-2 d-none">' +
            '       <p class="mb-1 text-left">' + message.message + '</p>' +
            '    </div>' +
            '</div>';
        this._container.appendChild(msgElement);

        // Evento para remover a mensagem
        var self = this;

        var msgToClose = document.getElementsByClassName('close-msg')
        var msgToOpen = document.getElementsByClassName('msg-details')

        msgToClose[msgToClose.length - 1].addEventListener('click', function () {
            var index = msgElement.getAttribute('data-index');
            self._messages.splice(index, 1);
            self._saveMessages();
            self._writeMessagesElements();
        });

        msgToOpen[msgToOpen.length - 1].addEventListener('click', function () {
            var index = msgElement.getAttribute('data-index');
            var classDetails = document.getElementById('msg-details-' + index).classList;

            var isDisplayNone = classDetails.contains('d-none');

            if (isDisplayNone) {
                classDetails.remove('d-none');
                classDetails.add('d-flex');
            } else {
                classDetails.add('d-none');
                classDetails.remove('d-flex');
            }
        });

        // msgElement.addEventListener('click', function () {

        //     var index = msgElement.getAttribute('data-index');
        //     self._messages.splice(index, 1);
        //     self._saveMessages();
        //     self._writeMessagesElements();

        // });

    };

    ListMessages.prototype._formatDate = function (unixTime) {

        var date = new Date(unixTime);
        return date.toLocaleString();

    };

    ListMessages.prototype._saveMessages = function () {

        localStorage.setItem('messages', JSON.stringify(this._messages));

    };

    return ListMessages;

}();

export default ListMessages;