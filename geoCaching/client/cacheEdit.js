Template.cacheEdit.helpers({
    cache: function () {
        var skrzynka = Caches.find({
            _id: this._id
        });
        return skrzynka;
    }
});

Template.cacheEdit.events({
    'click #submitbutton': function () {
        var nazwa = document.getElementById('cachename').value;
        var posX = document.getElementById('posx').value;
        var posY = document.getElementById('posy').value;
        var opis = document.getElementById('description').value;
        var hint = document.getElementById('hint').value;
        Caches.update({
            _id: this._id
        }, {
            $set: {
                "name": nazwa,
                "coord_x": posX,
                "coord_y": posY,
                "desc": opis,
                "help": hint
            }
        });
        alert("Pomyślnie zapisano zmiany");
    }
});