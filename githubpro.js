 
    let followers=null,imgurl=null
    const newUser= document.querySelector('#userName') 
   const submit= document.querySelector('#subt');
    
    const insert = document.getElementsByClassName('insert')[0];

    submit.addEventListener('click',function(e){
        e.preventDefault();
        let userID = newUser.value;

        createCardElement(userID);
       // console.log(userID)
    })
    function createCardElement (userID){
        const requestURL=`https://api.github.com/users/${userID}`;
        const xhr = new XMLHttpRequest();
        xhr.open('GET',requestURL) // 
        xhr.onreadystatechange = function(){
    
            console.log("Sending Get req : "+xhr.readyState)
            if(xhr.readyState === 4){
                const data = JSON.parse(this.responseText)
                //console.log(data.name+" Have "+ data.followers +" followers ");
                const  Urname = data.name;
                const followers = data.followers
                const imgLao = data.avatar_url
                const Publicrepo = data.public_repos;
                const kahakerehneWaleHo = data.location;
                const githubUrl = data.html_url;

                if(Urname=== null)
                {
                    Errormsg("404 not Found ");
                }
                else
                showNameProfile(Urname,Publicrepo,followers,imgLao,kahakerehneWaleHo,githubUrl);
            }
        }
        xhr.send() // send
       
    }
    const defImg=`
    https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp
    `
    const defEmail = `info@example.com`

    function showNameProfile(name,Publicrepo,followers,imgurl,location,githubUrl){
        insert.innerHTML = `
        
        <section class="vh-70" style="background-color: #f4f5f7;">
            <div class="container py-5 h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col col-lg-6 mb-4 mb-lg-0">
                  <div class="card mb-3" style="border-radius: .5rem;">
                    <div class="row g-0">
                      <div class="col-md-4 gradient-custom text-center text-white"
                        style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;">
                        <img src= ${imgurl}
                          alt="Avatar" class="img-fluid my-5" style="width: 80px;" />
                        <h6>${name}</h6>
                        <p>Web Designer</p>
                        <h6>Location : <bold>${location}<bold></h6>
                        <br/>
                        <a type="button" class="btn btn-outline-dark" href=${githubUrl}>Github Profile
                            
                        </a>
                        <i class="far fa-edit mb-5"></i>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body p-4">
                          <h6>Information</h6>
                          <hr class="mt-0 mb-4">
                          <div class="row pt-1">
                            <div class="col-6 mb-3">
                              <h6>Email</h6>
                              <p class="text-muted">info@example.com</p>
                            </div>
                            <div class="col-6 mb-3">
                              <h6>Phone</h6>
                              <p class="text-muted">123 456 789</p>
                            </div>
                          </div>
                          <h6>Public Repos :  ${Publicrepo}</h6>
                          <hr class="mt-0 mb-4">
                          <div class="row pt-1">
                            <div class="col-6 mb-3">
                              <h6>Recent</h6>
                              <p class="text-muted">Lorem ipsum</p>
                            </div>
                            <div class="col-6 mb-3">
                              <h6>Most Viewed</h6>
                              <p class="text-muted">Dolor sit amet</p>
                            </div>
                          </div>
                          <div class="d-flex justify-content-start">
                            <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                            <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                            <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        
        `;
    }
    function Errormsg(str){
        insert.innerHTML = `<div >${str} </div>`;
    }



   
 