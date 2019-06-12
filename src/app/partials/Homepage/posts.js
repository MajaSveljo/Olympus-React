import React from 'react';

let posts = [
    {
        firstName : "Ida",
        lastName : "Vanderboom",
        posted : "7 hours ago",
        post : "Cupcake ipsum dolor sit amet. Cake jelly beans I love croissant sweet roll. Cupcake lemon drops cupcake donut. Fruitcake candy canes tootsie roll chocolate cake pastry gummi bears I love carrot cake. Tart tart I love sweet. I love halvah powder. Sesame snaps dessert chupa chups cheesecake.",
        hearts : 6,
        comments : 17,
        shares : 24,
        sharedFirstName : "",
        sharedLastName : "",
        sharedPosted : "",
        sharedPost : ""
    },
    {
        firstName : "Ida",
        lastName : "Vanderboom",
        posted : "9 hours ago",
        post : "Cat ipsum dolor sit amet, spend six hours per day washing, but still have a crusty butthole, for cats making all the muffins or stare out cat door then go back inside but eat the fat cats food.",
        hearts : 6,
        comments : 17,
        shares : 24,
        sharedFirstName : "Felix",
        sharedLastName : "Kjellberg",
        sharedPosted : "19 hours ago",
        sharedPost : "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris."
    }
]

    const Posts = () => {
        return (
            <div className="posts">
    
                {posts.map( (item) => {
                    if (item.sharedFirstName) {
                        return <div className="post">
        
                        <div className="post__header">
                            <div className="profile-horizontal">
                                <span className="profile-photo"></span>
                                <span className="profile-info">
                                    <p>{item.firstName} {item.lastName} shared <a>{item.sharedFirstName} {item.sharedLastName}</a>'s <a>photo</a></p>
                                    <p>{item.posted}</p>
                                </span>
                            </div>
                            <div className="more-options"><a href="#">. . .</a></div>
                        </div>
            
                        <div className="post__text">
                            {item.post}
                            
                            <div className="shared">
                                <div className="post__photo"></div>
                                
                                <div className="post__header">
                                    <div className="profile-horizontal">
                                        <span className="profile-photo"></span>
                                        <span className="profile-info">
                                            <p>{item.sharedFirstName} {item.sharedLastName}</p>
                                            <p>{item.sharedPosted}</p>
                                        </span>
                                    </div>
            
                                    <div className="post__actions">
                                        <span><ion-icon name="heart-empty"></ion-icon></span>
                                        <span><ion-icon name="chatbubbles"></ion-icon></span>
                                        <span><ion-icon name="share-alt"></ion-icon></span>
                                    </div>
                                </div>
            
                                <div className="post__text">
                                    {item.sharedPost}
                                </div>
            
                            </div>
            
                        </div>
                        <div className="post__reactions">
                            <div className="post__reactions__heart">
                                <ion-icon name="heart-empty"></ion-icon> {item.hearts}
                            </div>
                            <div className="post__reactions__likers">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="post__reactions__names">
                                <p><span>Jenny</span>, <span>Robert</span> and</p>
                                <p>6 more liked this</p>
                            </div>
                            <div className="post__reactions__actions">
                                <ion-icon name="chatbubbles"></ion-icon>
                                {item.comments}
                                <ion-icon name="share-alt"></ion-icon>
                                {item.shares}
                            </div>
                        </div>
            
                        <div className="post__actions">
                            <span><ion-icon name="trophy"></ion-icon></span>
                            <span><ion-icon name="heart-empty"></ion-icon></span>
                            <span><ion-icon name="chatbubbles"></ion-icon></span>
                            <span><ion-icon name="share-alt"></ion-icon></span>
                        </div>
                    </div>
                    } else {

                        return <div className="post">
                                    <div className="post__header">
                                        <div className="profile-horizontal">
                                            <span className="profile-photo"></span>
                                            <span className="profile-info">
                                                <p>{item.firstName} {item.lastName}</p>
                                                <p>{item.posted}</p>
                                            </span>
                                        </div>
                                        <div className="more-options"><a href="#">. . .</a></div>
                                    </div>

                                    <div className="post__text">
                                        {item.post}
                                    </div>
                                    <div className="post__reactions">
                                        <div className="post__reactions__heart">
                                            <ion-icon name="heart-empty"></ion-icon> {item.hearts}
                                        </div>
                                        <div className="post__reactions__likers">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className="post__reactions__names">
                                            <p><span>Jenny</span>, <span>Robert</span> and</p>
                                            <p>6 more liked this</p>
                                        </div>
                                        <div className="post__reactions__actions">
                                            <ion-icon name="chatbubbles"></ion-icon>
                                            {item.comments}
                                            <ion-icon name="share-alt"></ion-icon>
                                            {item.shares}
                                        </div>
                                    </div>
                        
                                    <div className="post__actions">
                                        <span><ion-icon name="trophy"></ion-icon></span>
                                        <span><ion-icon name="heart-empty"></ion-icon></span>
                                        <span><ion-icon name="chatbubbles"></ion-icon></span>
                                        <span><ion-icon name="share-alt"></ion-icon></span>
                                    </div>

                            </div>
                    }
                })}
            </div>
        );
    };
    
    export default Posts;