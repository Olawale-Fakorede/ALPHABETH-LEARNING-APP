
        var letters = [
            {letter:"A", word:"Apple"}, 
            {letter:"B", word:"Ball"},
            {letter:"C", word:"Clarinet"},
            {letter:"D", word:"Dog"},
            {letter:"E", word:"Egg"},
            {letter:"F", word:"Fish"},
            {letter:"G", word:"Goat"},
            {letter:"H", word:"House"},
            {letter:"I", word:"Ice-Cream"},
            {letter:"J", word:"Jug"},
            {letter:"K", word:"Key"},
            {letter:"L", word:"Lion"},
            {letter:"M", word:"Mango"},
            {letter:"N", word:"Nose"},
            {letter:"O", word:"Owl"},
            {letter:"P", word:"Parrot"},
            {letter:"Q", word:"Queen"},
            {letter:"R", word:"Rabbit"},
            {letter:"S", word:"Ship"},
            {letter:"T", word:"Trumpet"},
            {letter:"U", word:"Unicorn"},
            {letter:"V", word:"Violin"},
            {letter:"W", word:"Watch"},
            {letter:"X", word:"Xylophone"},
            {letter:"Y", word:"Yam"},   
            {letter:"Z", word:"Zebra"}
        ]

        // IMAGES
        
        var imageLink = [
            document.querySelector("img").setAttribute("src", "apple.jpeg"),
            document.querySelector("img").setAttribute("src", "ball.jpeg"),
            document.querySelector("img").setAttribute("src", "clarinet.jpeg"),
            document.querySelector("img").setAttribute("src", "dog.jpeg"),
            document.querySelector("img").setAttribute("src", "egg.jpeg"),
            document.querySelector("img").setAttribute("src", "fish.jpeg"),
            document.querySelector("img").setAttribute("src", "goat.jpeg"),
            document.querySelector("img").setAttribute("src", "house.jpeg"),
            document.querySelector("img").setAttribute("src", "ice-cream.jpeg"),
            document.querySelector("img").setAttribute("src", "jug.jpeg"),
            document.querySelector("img").setAttribute("src", "key.jpeg"),
            document.querySelector("img").setAttribute("src", "lion.jpeg"),
            document.querySelector("img").setAttribute("src", "Mango.jpeg"),
            document.querySelector("img").setAttribute("src", "nose.jpeg"),
            document.querySelector("img").setAttribute("src", "owl.jpeg"),
            document.querySelector("img").setAttribute("src", "parrot.jpeg"),
            document.querySelector("img").setAttribute("src", "queen.jpeg"),
            document.querySelector("img").setAttribute("src", "rabbit.jpeg"),
            document.querySelector("img").setAttribute("src", "ship.jpeg"),
            document.querySelector("img").setAttribute("src", "trumpet.jpeg"),
            document.querySelector("img").setAttribute("src", "unicorn.jpeg"),
            document.querySelector("img").setAttribute("src", "violin.jpeg"),
            document.querySelector("img").setAttribute("src", "watch.jpeg"),
            document.querySelector("img").setAttribute("src", "xylophone.jpeg"),
            document.querySelector("img").setAttribute("src", "yam.jpeg"),
            document.querySelector("img").setAttribute("src", "zebra.jpeg")
        ];


        var interation = 0;
        var currentIndex = 0;
        var imageBox = document.querySelector("img").setAttribute("src", "apple.jpeg")
        // var myImage = document.querySelector("img");
        // var otherImages = myImage.getElementsByTagName('img')[0];
        

        document.getElementById("myDisplay").innerHTML = letters
        [interation].letter + " for " + letters[interation].word
        document.querySelector("img").setAttribute("src", "apple.jpeg")



        // otherImages.src = imageLink[0];

        // document.querySelector("img").innerHTML = imageLink[myImage].innerHTML


        function handleNext(){
            interation += 1
            // myImage += document.querySelector("img").setAttribute("src", "ball.jpeg"),
            if (currentIndex < imageLink.length - 1) {
                currentIndex++
            }
            else{
                currentIndex = 0;
            }
            imageBox.src = imageLink[currentIndex];

            document.getElementById("myDisplay").innerHTML = letters
            [interation].letter + " for " + letters[interation].word

            // document.querySelector("img").innerHTML += imageLink[myImage].innerHTML

        }

        function handlePrevious(){
            interation -= 1
            myImage -= 1

            document.getElementById("myDisplay").innerHTML = letters
            [interation].letter + " for " + letters[interation].word

            // document.getElementById("img").innerHTML -= myImage.innerHTML
        }


        

        // document.getElementById("imageBox").innerHTML = imAge;

        // function handleNext() {
        //     imAge += 1
        //     document.getElementById("imageBox").innerHTML = imAge;
            
        //     imAge = (imAge + 1) % images.length;
        //     imgElement.src = imageDir + images[imAge] 
        // }
        
    