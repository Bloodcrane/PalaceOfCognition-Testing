
// აქედან დაამატე არტიკლები
var articles = [
    // ეს დააკოპირე და გამოიყენე, დააჭირე ctrl + /  რომ მოაშორო კომენტი
    // {
    //     header: "Article 1 Header",
    //     image: "/Images/thewallthumbnail.jpg",
    //     description: "Description of Article 1",
    //     link: "https://"
    // },


    {
      header: "ამბაკო შარაშენიძე - ალბერ კამიუს 'უცხო'",
      image: "/Images/The-Outsider.jpg",
      description: "ალბერ კამიუს გასაოცარი ნაწარმოები „უცხო“, რომელიც კამიუმ  1942 წელს დაწერა, ერთი ახალგაზრდა კაცის, მერსოს ცხოვრებას ეხება,  იგი ერთ დღეს იგებს რომ დედამისი თავშესაფარში გარდაიცვალა, მაგრამ მერსო ამის გამო დიდად არ ნაღვლიანდება... ",
      link: "https://"
    },
    {
        header: "ირაკლი ჯაბუა - ისტორიის ტოლსტოისეული დეკონსტრუქცია რომანის ,,ომი და მშვიდობა” მიხედვით.",
        image: "/Images/napoleon.jpg",
        description: "„ომი და მშვიდობა“ განთქმულია იმ უდიდესი სიუჟეტური ლანდშაფტით, რომელსაც ტოლსტოი გვიხატავს. ნაწარმოები სიღრმისეული, დახვეწილი პერსონაჟებით გამოირჩევა, რომლებიც გაცოცხლებულია მათი ურთიერთობებით საზოგადოებასა და ისტორიულ ეპოქასთან...",
        link: "https://"
    },
    {
        header: "ნიკოლოზ მეტონიძე - ჰერმან ჰესეს 'ტრამალის მგელი'",
        image: "/Images/hesse1.jpg",
        description: "ჰერმან ჰესეს წიგნში ,,ტრამალის მგელი“, ჩვენ, პროტაგონისტ  ჰარი ჰალერს ვეცნობით, რომელიც ორმოცდაათიოდე წლის კაცია. ის თავის თავს ტრამალის მგელს უწოდებს და საკუთარი ცხოვრების მანძილზე, სიმარტოვეში ცდილობს ძალის პოვნას...",
        link: "https://"
    },
    {
        header: "ანამარი ხაჩატუროვი - სილვია პლათის 'ზარხუფი'",
        image: "/Images/belljar.jpg",
        description: "სილვია პლათის ავტობიოგრაფიული, პირველი და უკანასკნელი რომანის ,,ზარხუფი“, საზოგადოებაში პოპულარობის მოპოვების ძირითადი მიზეზი ფემინიზმის თემაზე ღიად, თამამად საუბარი გახლავთ...",
        link: "https://"
    },
    {
        header: "ირაკლი ჯაბუა - ბენდის ,,Rage Against The Machine“ პოლიტიკა და აქტივიზმი",
        image: "/Images/rage1.jpg",
        description: "როკ ჯგუფი “Rage Against the Machine“, 1991 წელს, ლოს ანჯელესში ჩამოყალიბდა. ის 90-იანი წლების ალტერნატიული როკისა და მეტალის სამყაროში, ერთ-ერთ ყველაზე მნიშვნელოვან და გარდამტეხ ჯგუფად მიიჩნევა",
        link: "https://"
    },
    {
        header: "მარიამ ბურდული - ალბერ კამიუს „უცხო“",
        image: "/Images/stranger.jpg",
        description: "რომანში, „უცხო”, ალბერ კამიუ მკითხველს ეგზისტენციალურ საკითხებთან მიმართებით საკუთარ შეხედულებებს უზიარებს. ნაწარმოების მთავარი გმირი, მერსო ალჟირში მცხოვრები ახალგაზრდა ფრანგია...",
        link: "https://"
    },
    {
        header: "ირაკლი ჯაბუა - პინკ ფლოიდი - ,,The Wall“",
        image: "/Images/thewallthumbnail.jpg",
        description: "ბრიტანული როკ ჯგუფის, „პინკ ფლოიდის“ ალბომი „კედელი“ (“The Wall”) ყველასათვის ცნობილი უნდა იყოს. იგი, პროგრესული როკის ჟანრში ერთ-ერთ ყველაზე მნიშვნელოვან ნამუშევრად მიიჩნევა...",
        link: "https://"
    },
    {
        header: "როკო კეკენაძე - „12 განრისხებული მამაკაცი“ - განხილვა",
        image: "/Images/12-Angry-Men-thumbnail.jpg",
        description: "სიდნი ლუმეტის 1957 წლის ამერიკული ფილმი „12 განრისხებული მამაკაცი” გვიამბობს ერთ ბიჭზე, რომელსაც ბრალად მამის მკვლელობა ედება...",
        link: "https://"
    },
    {
        header: "ანამარი ხაჩატუროვი - ფრანც კარფკას „გარდასახვა“",
        image: "/Images/metamorphosis.jpg",
        description: "ფრანც კაფკას ნოველას ,,გარდასახვა” დღევანდელ დღეს დიდი ადგილი უკავია მკითხველთა გულებსა და ლიტერატურაში. ...",
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
  