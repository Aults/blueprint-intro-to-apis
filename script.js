function func() {
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://api.genius.com/search/?q=123',
        headers: {
            'Authorization': 'Bearer U3YfVw9pl8upbHdy8J9tQpjtTKxEQeuK4KL5YTXhEAuCcESTH8c_w5rNVbg9J5Rv'
        },
        data: {
            'q': document.getElementById("textbox").value
        },
        success: function(response) {
            console.log(response.response);
            var list = document.getElementById("list");
            list.removeChild(list.childNodes[0]);
            var ul = document.createElement('ul');
            for(var i = 0; i < response.response.hits.length; i++) {
                var li = document.createElement('li');
                li.innerHTML = response.response.hits[i].result.full_title;
                ul.append(li);
            }
            list.appendChild(ul);
        },
        error: function(response) {
            alert("We just had an error!");
            console.log(response)
        }
    })
}

document.getElementById("textbox").placeholder = "Enter artist";
$('#button-id').on('click', func);