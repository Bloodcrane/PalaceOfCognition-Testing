
// აქედან დაამატე ფილმები <!--  -->
var articles = [
    // ეს დააკოპირე და გამოიყენე, დააჭირე ctrl + /  რომ მოაშორო კომენტი
    // {
    //     header: "Film 1 Header",
    //     image: "/Images/film.jpg",
    //     description: "Description of Film 1",
    //     link: "https://"
    // },

    {
      header: "ველოსიპედის გამტაცებელნი (1948) - რეჟისორი ვიტორიო დე სიკა",
      image: "https://media.discordapp.net/attachments/1205803046123216908/1205804344788783114/bicycle-thieves.jpg?ex=65d9b3ce&is=65c73ece&hm=077ff5369966475cced4da9861102390a3daa53900e0cc4163ee68b1bdc0e4c1&=&format=webp&width=312&height=468",
      description: "„ველოსიპედის გამტაცებელნი“ - ნეორეალიზმის თვალსაჩინო ნიმუშია. ფილმი მოგვითხრობს ღარიბი იტალიელი მამაკაცის ამბავს, რომელიც მოპარულ ველოსიპედს ეძებს, მის გარეშე, იგი სამსახურს დაკარგავს და ოჯახის რჩენას ვერ შეძლებს. ნამუშევარში ომისშემდგომ იტალიაში დაბუდებული მძიმე სოციალური მდგომარეობაა ასახული.",
      link: "https://"
    },
    {
      header: "პატარა (1921) - რეჟისორი ჩარლი ჩაპლინი",
      image: "https://media.discordapp.net/attachments/1205803046123216908/1205804422047735818/the-kid.jpg?ex=65d9b3e0&is=65c73ee0&hm=63c3ca5bfc76021f39a2c81bae3d8b7134f9b68fb8182e0babb0427eb36b3359&=&format=webp&width=241&height=467",
      description: "„პატარა“ ჩარლი ჩაპლინის ნამუშევარია. მარტოხელა მუშა, ღარიბულ სახლში შეიკედლებს უცხო ბავშვს, შემდეგ კი, იძულებულია რომ მას დაშორდეს. რთულია, რომ ხსენებულმა ნამუშევარმა მაყურებელი აღელვების გარეშე დატოვოს.",
      link: "https://"
    },
    {
      header: "მე, დენიელ ბლეიკი (2016) - რეჟისორი ქენ ლოუჩი",
      image: "https://media.discordapp.net/attachments/1205803046123216908/1205804396856877096/I-Daniel-Blake.jpg?ex=65d9b3da&is=65c73eda&hm=8f46879e36522422d1fb81ecf532568305b101a1fd4aa526d5fba4e905c46fc7&=&format=webp",
      description: "„მე, დენეილ ბლეიკი“ - ბრიტანული სოციალური კინოა. გულის შეტევის გადატანის შემდგომ, 59 წლის დენიელ ბლეიკს უწევს ებრძოლოს სახელმწიფოს ბიუროკრატიულ მანქანას, სამუშაოსა და სოციალური დახმარების მიღების მიზნით.",
      link: "https://"
    },
    {
      header: "პროექტი „ფლორიდა“ (2017) - რეჟისორი შონ ბეიკერი",
      image: "https://media.discordapp.net/attachments/1205803046123216908/1205804345489096737/florida-project.jpg?ex=65d9b3ce&is=65c73ece&hm=e5314b641209411dd070fc6b2f1320e3c9f9006032b17ecce5bbf7d35452482e&=&format=webp",
      description: "„პროექტი ფლორიდა“ - ერთი ზაფხულს, ფლორიდის ღარიბულ მოტელში მცხოვრები  ბავშვების შესახებ მოგვითხრობს. ფილმი ამერიკის ღარიბი მოსახლეობის ყოველდღიურობაში არსებულ ეკონომიკურ პრობლემებს აღგვიწერს.",
      link: "https://"
    },
    {
      header: "400 დარტყმა (1959) - რეჟისორი ფრანსუა ტრიუფო",
      image: "https://media.discordapp.net/attachments/1205803046123216908/1205804423297900554/the-400-blows.jpg?ex=65d9b3e1&is=65c73ee1&hm=1f3b107e77adf08da5d958e3cdc8fa085f931e363fd839db48d5c23aa15e64cb&=&format=webp&width=377&height=468",
      description: ">„400 დარტყმა“ ფრანგული ახალი ტალღის სულისჩამდგმელი ნამუშევარია. ფილმი ემოციურად მიტოვებული მოზარდის      შესახებ მოგითხრობს,  ბიჭს აკლია ყურადღება მშობლებისა და სკოლისაგან. ფილმი ნაწილობრივ ავტობიოგრაფიულია, რაც ნამუშევარში აღწერილ პრობლემატიკას მეტ სანდოობას ანიჭებს.",
      link: "https://"
    },
    { 
      header: "მშვიდობით ბავშვებო (1987) - რეჟისორი ლუი მალი",
      image: "https://media.discordapp.net/attachments/1205803046123216908/1205804345707339776/goodbye-children.jpg?ex=65d9b3ce&is=65c73ece&hm=78a7e98e0c120753f05d45a5dd7a5b28e250bfde508a373c398e3a10d0e72773&=&format=webp",
      description: "მშვიდობით ბავშვებო“ - ფილმი მეორე მსოფლიო ომის დროს, ნაცისტების მიერ ოკუპირებულ საფრანგეთში ერთ-ერთი კათოლიკური სკოლის შესახებ მოგვითხრობს. სკოლის ხელმძღვანელობის მიერ შეფარებულია რამდენიმე ებრაელი ბავშვი, ნამუშევარი მორალური დილემების, თანაგრძნობის, ერთგულებისა და სხვა ადამიანური საკითხების გარშემო ტრიალებს.",
      link: "https://"
    },
    {
      header: "უკანასკნელი მოჰიკანი (1998) - რეჟისორი მაიკლ მენი",
      image: "https://media.discordapp.net/attachments/1205803046123216908/1205804445724835840/the-last-of-the-mohicans.jpg?ex=65d9b3e6&is=65c73ee6&hm=b55e0b329cb1278d719c7c95c0682a35ba919ea35b7bdb990a5e17ec3faca4a5&=&format=webp",
      description: "„უკანასკნელი მოჰიკანი“ - ფილმი აღგვიწერს მეთვრამეტე საუკუნეში ამერიკის კოლონიზაციისათვის წარმოებულ ომსა და ინდიელების ჩართულობას ამ ბრძოლაში.",
      link: "https://"
    },
    {
      header: "ეს მშვენიერი ცხოვრება (1946) - რეჟისორი ფრენკ კაპრა",
      image: "https://media.discordapp.net/attachments/1205803046123216908/1205804397225971742/Its-A-Wonderful-Life.jpg?ex=65d9b3db&is=65c73edb&hm=1ab7328b0030673fa7bc37ac3ffbfcd0c5fa78c57fe332807e895de1469ced1f&=&format=webp&width=312&height=468",
      description: "„ეს მშვენიერი ცხოვრება“ - ამერიკული საშობაო ფილმი. პატარა ქალაქში, ბედფორდ ფოლსში მცხოვრები კაცი სადაზღვევო კომპანიის მფლობელია, იგი მოსიყვარულე ქმარი და მამაა, რომლის ცხოვრებაშიც ქალაქში არსებული მწვავე კლასობრივი პრობლემატიკა იჭრება.",
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
      link.textContent = "";
  
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
  