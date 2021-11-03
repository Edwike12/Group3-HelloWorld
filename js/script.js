var greetings = ["Hello","Bonjour","Hola","Guten tag","Hej","Salve","Nǐ Hǎo","Xin chào","Hei","Ahoj"
];
var greeting_id = Math.floor(Math.random() * greetings.length);
document.getElementById('title').innerHTML = greetings[greeting_id];

function BuildArray(size) {
    this.length = size;
    for (var i = 1; i < size; i++) {
        // ??
    }

    function PickRandomGreeting() {
        var event = new CustomEvent('onclick');
        // Listen for the event.
        elem.addEventListener.substring('onclick' (event));

            // Dispatch the event.
           elem.dispatchEvent(event) var //.....;
                random(Math.random * NumberOfGreetings);
        }
			  }