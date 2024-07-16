let slider = document.querySelector("#photo")
let nextButton = document.querySelector("#nextBtn")
let prevButton = document.querySelector("#prevBtn")
let header = document.querySelector("#header")

let images = [
    "https://img.freepik.com/free-photo/portrait-lion-ai-generated_268835-4278.jpg?t=st=1721128790~exp=1721132390~hmac=0265b32a4faa8f4dfd7ee78e54e5561a94268d1b3c855c34fc56993ec86bc126&w=900",
    "https://img.freepik.com/premium-photo/close-up-mallard-duck-flying-outdoors_1048944-30368768.jpg?w=826",
    "https://img.freepik.com/free-photo/dense-school-barracuda-fish-forms-underwater-silver-wall_157027-4393.jpg?t=st=1721129500~exp=1721133100~hmac=1162315308d819d141c4c06ca6c69cdfc91b5cc60f96a35b0a115a11ede37a26&w=1060",
    "https://img.freepik.com/free-photo/cute-goat-grazing-green-meadow-generated-by-ai_188544-14284.jpg?t=st=1721129540~exp=1721133140~hmac=de23ef66862044bdb2c556cc2fdd8f225cad9c29f6917f59bc8f2e6a00992469&w=1060",
    "https://img.freepik.com/free-photo/adorable-cat-lifestyle_23-2151593399.jpg?t=st=1721129033~exp=1721132633~hmac=83b5ace44a080efe320f2796f248f5954ee5df21c510972d479eb7a4de55b9fa&w=1060"
]


let indexNumber = 0

slider.src = images[indexNumber]

nextButton.addEventListener("click", function(){
    if(indexNumber < images.length -1){
        indexNumber++
        slider.src = images[indexNumber]
    } 

    if(indexNumber == images.length -1){
        header.innerHTML = "This is the end"
        header.style.backgroundColor = "white"
        header.style.color = "Blue"
    }
})

prevButton.addEventListener("click", function(){
    if(indexNumber > 0){
        indexNumber--
        slider.src = images[indexNumber]
    }
})