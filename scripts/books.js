
// აქედან დაამატე წიგნები
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
        image: "/Images/stranger.jpg",
        description: "ალბერ კამიუს სადებიუტო რომანი, ეგზისტენციალისტური იდეების კლასიკური გამოსახვა, „უცხო“ მოგვითხრობს ალჟირში მცხოვრები ფრანგის, მერსოს ცხოვრებისა და გასამართლების შესახებ. რომანი განიხილავს აბსურდის ფილოსოფიის იდეებს.",
        link: "https://"
    },
    {
      header: 'ერნესტ ჰემინგუეი - „მოხუცი და ზღვა“',
      image: "/Images/hemingwey.png",
      description: '„მოხუცი და ზღვა" - მოთხრობა რომელმაც ავტორს ნობელის პრემია მოუტანა, დაიწერა 1951 წელს, კუბაში. მოთხრობილია მოხუცი მეთევზის ამბავი რომელსაც მრავალდღიანი მარცხის შემდეგ გიგანტურ თევზთან შეჭიდება მოუწევს. მოთხრობა ჰემინგუეის შემოქმედებაში გმორჩეულ ადგილს იკავებს.',
      link: "https://"
    },
    {
      header: 'ჯეკ ლონდონი - "ცხოვრების სიყვარული"',
      image: "/Images/london.jpg",
      description: '„ცხოვრების სიყვარული“ ორი ოქროს მაძიებლის შესახებ მოგვითხრობს, რომლებიც გადარჩენას კანადის გაუსაძლის სიცივეში ცდილობენ. ჯეკ ლონდონი დეტალურად აღწერს პერსონაჟების მიერ გამოვლილ შიშს, ტანჯვასა და შიმშილს - წარმოაჩენს ადამიანის ბრძოლას სიცოცხლისთვის.',
      link: "https://"
    },
    {
      header: 'ევრიპედე - „მედეა"',
      image: "/Images/medea-1.jpg",
      description: 'კლასიკური ათენის ტრაგიკოსის, ევრიპედეს ნაწარმოები „მედეა", ძველბერძნული ტრაგედიისა და მსოლიო ლიტერატურის სანიმუშო ნამუშევარია.',
      link: "https://"
    },
    {
      header: 'ფრანც კაფკა - „გარდასახვა"',
      image: "/Images/metamorphosis.jpg",
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
  