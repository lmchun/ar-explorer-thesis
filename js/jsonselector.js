const config = {
    type: "carousel",
    gap: 15, // add a 15px gap between slides
    peek: {
      before: 0,
      after: 100 // adjust the peek option to account for the gap
    },
    breakpoints: {
      768: {
        perView: 2,
        gap: 10, // adjust the gap for smaller screens
        peek: {
          before: 0,
          after: 50 // adjust the peek option for smaller screens
        }
      },
      576: {
        perView: 1,
        gap: 5, // adjust the gap for even smaller screens
        peek: {
          before: 0,
          after: 25 // adjust the peek option for even smaller screens
        }
      }
    },
      // initialize the Bullets component
    // bullets: '.glide__bullet',
  };
const glide = new Glide('.glide', config);
const checkBox = document.querySelector("#localSearch")
const searchInput = document.querySelector("[data-search]")
const xrsCardTemplate = document.querySelector("[data-xrs-cards]");
const xrsCardContainer = document.querySelector("[data-xrs-container]");
const xrsPageTemplate = document.querySelector("[data-xrs-page]");
const xrsPageContainer = document.querySelector("[data-xrs-page-container]");
let xrs = []

// checkBox.addEventListener("change", (e)=>{
//   function isNewYork (address) {
//     // will return true if the address array contains the search value.
//     // will return false if they don't contain a value
//     let result = address.some(address => address.toLowerCase().includes("NY")) 
//     return result
//   }
//   if(checkBox.checked = true){
//   //remove the filter

//   }else{
//   //add the filter back

//   }
// })

searchInput.addEventListener("input", (e)=>{
    const value = e.target.value.toLowerCase()
    xrs.forEach(xr => {
        const splitValue = value.split(",");
        const removeComma = splitValue.map(valueAll => valueAll.trim())
       console.log(removeComma)
        function hasAuthor (searchValue, authors) {
            // will return true if the authors array contains the search value.
            // will return false if they don't contain a value
            let result = authors.some(author => author.toLowerCase().includes(searchValue)) 
            return result
        }
        // const isVisible = xr.title.toLowerCase().includes(value) || xr.platform.toLowerCase().includes(value)  || xr.type.toLowerCase().includes(value) || hasAuthor(value,xr.authors) || xr.address.toLowerCase().includes(value) || xr.location.toLowerCase().includes(value) 
        const isVisible = xr.title.toLowerCase().includes(removeComma) || xr.platform.toLowerCase().includes(removeComma)  || xr.type.toLowerCase().includes(removeComma) || hasAuthor(removeComma,xr.authors) || xr.address.toLowerCase().includes(removeComma) || xr.location.toLowerCase().includes(removeComma) 
        xr.element.classList.toggle("hide", !isVisible)
    })
})
const searchParams = new URLSearchParams(location.search);
// use the end https://(DOMAIN)/qr/database.html?id=3
if(searchParams.has('id') == true){
    // console.log(searchParams.has('id'));
    fetch(`https://lc4726.itp.io/id/`+ searchParams.get('id'))
    .then(res => res.json())
    .then(data => {
            let xr = data;
            const page = xrsPageTemplate.content.cloneNode(true).children[0]
            const title = page.querySelector("[data-title]");
            const year = page.querySelector("[data-year]");
            const genre = page.querySelector("[data-genre]");
            const platform = page.querySelector("[data-platform]");
            // const urltn = page.querySelector("[data-urltn]");
            const desc = page.querySelector("[data-desc]");
            const alt = page.querySelector("[data-caption]");
            const authors = page.querySelector("[data-authors]");
            const authorSplit = xr.authors
            const authorUI = authorSplit.toString().replace(",", ", ");
            const trybutton =  page.querySelector("[data-try]");
            // const lookbutton = page.querySelector("[data-doc]")
            trybutton.innerHTML =  `<button class="buttonfilter">Try Experience</button>`
            

            // Get the modal
            let modal = page.querySelector("#myModal");
            let btn = page.querySelector(".buttonfilter");
            var span = page.getElementsByClassName("close")[0];
            btn.onclick = function() {
              modal.style.display = "block";
            }
            span.onclick = function() {
              modal.style.display = "none";
            }
            window.onclick = function(event) {
              if (event.target == modal) {
                modal.style.display = "none";
              }
            }


            // ORIGINAL BUTTON GO TO EXPERIENCE LINK
            // trybutton.innerHTML =  `<button class="buttonfilter" onclick="window.location.href='${xr.url}'">Try Experience</button>`

            // const local = xr.location;
            // if(xr.location == "NA"){
            //     location = ;}
            const location = page.querySelector("[data-loc]");
            location.innerHTML = `<span>Location: ${xr.location} </span>`
            // location.innerHTML = `<span>Location: ${local} </span>`
            const address = page.querySelector("[data-address]");
            address.innerHTML = `<span>Address: ${xr.address} </span>`
            const requirements = page.querySelector("[data-requirements]")
            requirements.innerHTML = `<p>App Requirements: ${xr.requirements}</p>`
            const detailimages = page.querySelector('[data-detimg');
            // detailimages.src = xr.detimg;
            title.textContent = xr.title;
            year.innerHTML = `<span>${xr.year}</span>`
            genre.innerHTML = `<span>Genre: ${xr.genre}</span>`
            platform.innerHTML = `<span>Platform: ${xr.platform}</span>`
            desc.textContent = xr.desc;
            alt.textContent = xr.tnalt;
            authors.innerHTML = `<span>Authors: ${authorUI}</span>`      
            const intr = page.querySelector("[data-intro]");
            const deta = page.querySelector("[data-detail]");
            const detafull = page.querySelector("[data-detailfull]");
            intr.textContent = xr.intro;
            const detailfull = xr.detail;
            let detailpreview = detailfull.substr(0, 151);
            let detailMore = detailfull.substr(151,1000);
            deta.textContent = detailpreview;
            detafull.textContent = detailMore;
             let imglink = xr.detimg;
//////////////////////////////////////////////////////////////////////
            const detailImgTrack = page.querySelector("[data-detailImg]");
            const detailImgBullets = page.querySelector("[data-detailImgBullets]");
            // const glidecontainer  = document.createElement("div")
            // const glidetracker = document.createElement("div")
            const glideul = document.createElement("ul")
            // glidecontainer.classList.add("glide");
            // glidetracker.classList.add("glide__track");
            // glidetracker.setAttribute("data-glide-el", "track")
            glideul.classList.add("glide__slides");
            
            // urltn.appendChild(glidecontainer);
            // glidecontainer.appendChild(glidetracker);
            // urltn.appendChild(glidetracker);
            // glidetracker.appendChild(glideul)
            detailImgTrack.appendChild(glideul)
            
            // const glideControllers = document.createElement("div")
            // urltn.appendChild(glideControllers)
            // glidecontainer.appendChild(glideControllers)
            // glideControllers.classList.add("glide__bullets")
            // glideControllers.setAttribute("data-glide-el", "controls[nav]")

            for (let i = 0; i < imglink.length; i++) {
                imglink[i] // is a string “img.jpg”
                let beboCarousel = document.createElement("li");
                let imgDetail = document.createElement("img");
                
                beboCarousel.classList.add("glide__slide");
                beboCarousel.appendChild(imgDetail);
                // beboCarousel.classList.add("detailimg");
                imgDetail.src = imglink[i];
                glideul.appendChild(beboCarousel)

                let glideButton = document.createElement("button");
                glideButton.classList.add("glide__bullet")
                let glideButtonIncrement = "=" + i.toString();
                glideButton.setAttribute("data-glide-dir", glideButtonIncrement)
                detailImgBullets.appendChild(glideButton)
                // glideControllers.appendChild(glideButton)

            }
                        //need to append the images to the lis 
            //  for(imglist = 0; imglist<imglink.length; imglist++ ){
            //      let imgdetail = document.createElement("img");
            //     //  const glideli = document.createElement("li");

            //     imglist.toString();
            //     imgdetail.setAttribute("id",imglist)
            //     imgdetail.src = imglink[imglist];
            //     imgdetail.classList.add("detailimg");
            //     // imgdetail.setAttribute("class",detailimg)
            //     // glideul.appendChild(imgdetail)
            //     glideul.innerHTML += "<li class='glide__slide'>" + imgdetail + "</li>"
            //  }

            ///////////////////this is the modal popup///////////////////
            //preview base
          // let headThumb = document.createElement("div")
           // let scanTitle = document.createElement("h3")
           // let directBtn = document.createElement("button")
          //  let scanGenre = document.createElement("p")
          // let tryBtn = document.createElement("button")
           // scanTitle.setAttribute("data-title","")
          // scanTitle.setAttribute("class", "titleMobile")


          let beforeYouGoPopup = page.querySelector(".modal-content")
          let headMobile = document.createElement("div")
          beforeYouGoPopup.appendChild(headMobile)
          
          let headTitleText = document.createElement("div")
         
          let beforeHeader= document.createElement("h3")
          let scanPlatform = document.createElement("p");
         
          let scanAddress = document.createElement("p")
          let platformIcon = document.createElement("img")
     
         
// onclick="window.location.href='${xr.url}'"
         
          scanAddress.setAttribute("data-address", "")
          scanAddress.setAttribute("class", "subinfoMobile")
            beforeHeader.innerText = "Before You Go!"
          // scanTitle.innerText = xr.title
          if(xr.address !== "NA"){
           scanAddress.innerHTML = `<span><img src="assets/checkmark.png"> Located at: ${xr.address}</span>`  
          }
          headMobile.appendChild(headTitleText)
          headTitleText.appendChild(beforeHeader)
          headTitleText.appendChild(scanAddress)

          function checkPlatform(){
            if(xr.platform == "Adobe Aero"){
              scanPlatform.innerHTML = `<span>Download ${xr.platform}</span>`
              platformIcon.src = "https://s6.imgcdn.dev/rzzaD.png"

            }else if(xr.platform == "Snapchat"){

              platformIcon.src="https://s6.imgcdn.dev/rzat9.png"

            }else if(xr.platform == "Instagram"){

              platformIcon.src="https://s6.imgcdn.dev/rzlcT.png"

            }else if(xr.platform == "AR Poise"){

            }else if(xr.platform == "Test Flight"){

            }else if(xr.platform == "Acute Art App"){

            }else if(xr.platform == "Dreamground App"){

            }else if(xr.platform == "New York Times App"){

            }else if(xr.platform == "Hoverlay"){

            }
          }
          
          // headTitleText.appendChild(scanTitle)
          // headTitleText.appendChild(scanGenre)
          

          // headMobile.appendChild(headThumb)
          // tryBtn.setAttribute("onclick", "tryAr()")
          // 
          // headMobile.appendChild(tryBtn)
          // tryBtn.innerHtml = `<img src=“”>Try out `
          // directBtn.setAttribute("onclick", "mapAr()")
          // directBtn.innerHtml = `<img src="">Directions `




            xrsPageContainer.append(page);
    }) 
    .then(() => glide.mount());

    
    let showBar = document.getElementById("searchbar");
    showBar.style.display = "none";
    let divider = document.getElementById("space");
    divider.style.display = "none"
    // divider.style.display = "inline"
    let uptop = document.getElementById("jumptop");
    uptop.style.display = "none"    
}else{
    //CARDS
    fetch("https://lc4726.itp.io/all")
    .then(res => res.json())
    .then(data => {
        xrs = data.map(xr => {               
            const card = xrsCardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
            const urltn = card.querySelector("[data-urltn]");
            const authorSplit = xr.authors
            const authorUI = authorSplit.toString().replace(",", ", ");
            const cardLink = card.querySelector("[data-idCard]");
            let blurbpreview = xr.desc.substr(0, 120);
        
            if (blurbpreview.endsWith(".")) {
            blurbpreview +="..";
            }else if(blurbpreview.endsWith("")){
              blurbpreview = blurbpreview.replace(/\s+$/, '');
              blurbpreview +="...";
            }

            let authorAmount = "Author:";
            if (xr.authors.length > 1 ){
                authorAmount  = "Authors:"
            }
            header.innerHTML = `<a href="?id=${xr.id}"><h3 class="exptitle">${xr.title}</h3></a>`
            body.innerHTML = `<button class="cardButton" onclick="window.location.href='?id=${xr.id}'"><p>${authorAmount} ${authorUI}</p><p>Platform: ${xr.platform}</p><p>${blurbpreview}</p></a>`

            urltn.innerHTML = `<img class="urltn" src="${xr.tn}">`
            xrsCardContainer.append(card);
            return{
                title: xr.title, url: xr.url, platform: xr.platform, type: xr.type, element : card, authors: xr.authors, address: xr.address, location:xr.location
            }
        })
    })
   let divider = document.getElementById("space");
    divider.style.display = "none"
}




