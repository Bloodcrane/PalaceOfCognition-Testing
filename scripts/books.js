
// აქედან დაამატე წიგნები <!--  -->
var articles = [
    // ეს დააკოპირე და გამოიყენე, დააჭირე ctrl + /  რომ მოაშორო კომენტი
    // {
    //     header: "Book 1 Header",
    //     image: "/Images/book.jpg",
    //     description: "Description of Book 1",
    //     link: "https://"
    // },

    {
        header: "ალბერ კამიუ - „უცხო“",
        image: "https://media.discordapp.net/attachments/1205803046123216908/1205804422832201788/stranger.jpg?ex=65d9b3e1&is=65c73ee1&hm=4e8be381e44f77534064c68ade6e856638892a9e7da7172eb3e7ff81ca8391ce&=&format=webp",
        description: "ალბერ კამიუს სადებიუტო რომანი, ეგზისტენციალისტური იდეების კლასიკური გამოსახვა, „უცხო“ მოგვითხრობს ალჟირში მცხოვრები ფრანგის, მერსოს ცხოვრებისა და გასამართლების შესახებ. რომანი განიხილავს აბსურდის ფილოსოფიის იდეებს.",
        link: "https://"
    },
    {
      header: 'ერნესტ ჰემინგუეი - „მოხუცი და ზღვა“',
      image: "https://media.discordapp.net/attachments/1205803046123216908/1205804395787456552/hemingwey.png?ex=65d9b3da&is=65c73eda&hm=22f07038e6b644db9d5423895ef4e0057705f6a964dfd2aa9eeb2ec279612983&=&format=webp&quality=lossless&width=303&height=468",
      description: '„მოხუცი და ზღვა" - მოთხრობა რომელმაც ავტორს ნობელის პრემია მოუტანა, დაიწერა 1951 წელს, კუბაში. მოთხრობილია მოხუცი მეთევზის ამბავი რომელსაც მრავალდღიანი მარცხის შემდეგ გიგანტურ თევზთან შეჭიდება მოუწევს. მოთხრობა ჰემინგუეის შემოქმედებაში გმორჩეულ ადგილს იკავებს.',
      link: "https://"
    },
    {
      header: 'ჯეკ ლონდონი - "ცხოვრების სიყვარული"',
      image: "https://media.discordapp.net/attachments/1205803046123216908/1205804412799295488/london.jpg?ex=65d9b3de&is=65c73ede&hm=8beff57504e3b235c74e7da3115e19a9dca97509a7ee902c00b74d4cc12dfb2a&=&format=webp&width=334&height=468",
      description: '„ცხოვრების სიყვარული“ ორი ოქროს მაძიებლის შესახებ მოგვითხრობს, რომლებიც გადარჩენას კანადის გაუსაძლის სიცივეში ცდილობენ. ჯეკ ლონდონი დეტალურად აღწერს პერსონაჟების მიერ გამოვლილ შიშს, ტანჯვასა და შიმშილს - წარმოაჩენს ადამიანის ბრძოლას სიცოცხლისთვის.',
      link: "https://"
    },
    {
      header: 'ევრიპედე - „მედეა"',
      image: "https://media.discordapp.net/attachments/1205803046123216908/1205804413067726858/medea-1.jpg?ex=65d9b3de&is=65c73ede&hm=82eebd2a9a6c0ac57726eb4ec6fb090f9d528fb1970a85606c0b444548ea73ad&=&format=webp&width=351&height=468",
      description: 'კლასიკური ათენის ტრაგიკოსის, ევრიპედეს ნაწარმოები „მედეა", ძველბერძნული ტრაგედიისა და მსოლიო ლიტერატურის სანიმუშო ნამუშევარია.',
      link: "https://"
    },
    {
      header: 'ფრანც კაფკა - „გარდასახვა"',
      image: "https://media.discordapp.net/attachments/1205803046123216908/1205804413428695040/metamorphosis.jpg?ex=65d9b3de&is=65c73ede&hm=d58c4ed19284c282a13a440269398362acfd55e7fb32b66a011361471fe684ef&=&format=webp&width=332&height=468",
      description: '„გარდასახვა" ავტორის შემოქმედებიდან ერთ-ერთი ყველაზე ცნობილი ნაწარმოებია. ნოველა ახალგაზრდა კომოვოიჟერის, გრეგორი ზამზას შესახებ მოგვითხრობს, რომელიც დილით გაღვიძებისას აღმოაჩენს, რომ საზარელ მწერად გადაიქცა. ნაწარმოები წარმოაჩენს მთავარი პერსონაჟის ურთიერთობას ოჯახთან და გარე სამყაროსთან.',
      link: "https://"
    },
  ];
  
  // Function to dynamically create articles
  function createArticles() {
    console.log("Creating content...");
    var container = document.getElementById("contentContainer");
    console.log("Container:", container);
  
    articles.forEach(function(article) {
      var articleDiv = document.createElement("div");
      articleDiv.classList.add("article");
  
      var header = document.createElement("h2");
      header.textContent = article.header;
  
      var image = document.createElement("img");
      image.src = article.image;
      image.alt = article.header;
  
      var description = document.createElement("p");
      description.textContent = article.description;
  
      var link = document.createElement("a");
      link.href = article.link;
      link.textContent = "მეტის ნახვა";
      link.id = "ahref"
  
      // Append elements to articleDiv
      articleDiv.appendChild(header);
      articleDiv.appendChild(image);
      articleDiv.appendChild(description);
      articleDiv.appendChild(link);
  
      // Append articleDiv to container
      container.appendChild(articleDiv);
    });
  }
  
  // Call the function to create articles when the page loads
  window.onload = function() {
    console.log("Window loaded.");
    createArticles();
  };
  