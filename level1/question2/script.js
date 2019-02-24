
    var section = document.querySelector('section');

    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(result => result.json())
      .then((res) => {
        createToDoList(res);
      })
      .catch(err => document.write(err))

      request.onload = function() {
      createToDoList(result);
    }

    function createToDoList(result) {
      var cardList = document.getElementById('card');
      var numCards = result.length;
      for (var i = 0 ; i < numCards ; i++){

        var userId = result[i].userId;
        var id = result[i].id;
        var title = result[i].title;
        var completed = result[i].completed;

        var userId_txt = "userId: " + userId + "<br/>";
        var id_txt = "id: " + id + "<br/>";
        var title_txt = "title: " + title + "<br/>";
        var completed_txt = "completed: " + completed;

        var cardFrame = document.createElement('iframe');
        cardFrame.frameBorder = 1.5;
        cardFrame.width = "250px";
        cardFrame.height = "150px";

        cardFrame.onload = function()
        {
            var contentDocs = cardFrame.contentDocument || cardFrame.contentWindow.document;
            var para = contentDocs.createElement('p');
            para.innerHTML = userId_txt;
            para.innerHTML += id_txt;
            para.innerHTML += title_txt;
            para.innerHTML += completed_txt;
            contentDocs.body.appendChild(para);
        };

        //section is created in the body of HTML
        document.getElementById("frameSection").appendChild(cardFrame);

      }

    }
