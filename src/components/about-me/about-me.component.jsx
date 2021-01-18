import React from 'react';
import './about-me.styles.scss';

export const About = () => (
    <div>
        <div className="blockquote-container">
            <blockquote className="browser-default">Nor the intelligent, nor the strongest, but the one who is able to adapt and overcome will survive</blockquote>
            <cite>- Charles Darwin</cite>
        </div>
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <h2>About me</h2>
                    <p>
                        My name is Valentin Vranić, I was born in beautiful city Sombor, Serbia. It is a city full of diversified pleasant nations, near to border with Croatia and Hungary. After graduating on high school, I moved to northern city Subotica, where I enrolled to Subotica Tech - College of Applied Sciences and after graduated in 2017.
                        After I started something called life, but on rollercoaster. For around one and a half years I was a backend developer of one local company called Erdsoft. After my enthusiastic work, I decided to skip a little bit from IT life, and I moved to Germany and after to France and I worked on a river cruise ship as a waiter and bartender for more than one season. Here I developed my social skills and how to communicate and do the job with people from more than 5 nations and different mentalities. Also I improved my english and german speaking, and just taste a bit of french, romanian, bulgarian.
                        In the beginning of 2020 I docked on land, and in April I moved to Szeged, Hungary. This city was the sweet spot, in between of my friends and my home. During that time that I moved here, beside of searching for job, I started to develop myself on many sides. But most likely to come back to what I really like to do, programming. I finished few courses like Laravel, ReactJS, git to develop and practice my skills.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                Beside of being a pragmathusiast (comb. of pragmatic and enthusiast) programmer
                I really like to do the belows too...
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <h2>Running</h2>
                    <p>Football jumped into my life when I was a kid, and I can count on one hand how many times I skipped trainings till I enrolled to university. After I stopped to play football, but the fire inside me never burned out toward that beautiful game, so I continued to play it, but only on amateur level. In 2020 I decided to come back to sport, but with a little bit more confident and discipline, so I've chose running. In this year I ran my first (42k) marathon, and a few half-marathons, and one 30k running. From October this year I have an amazing coach for running, and now I'm more determined than I ever been. My dream is to complete the UB (UlraBalaton), so I'm striving to that goal, week by week!  </p>
                </div>
                <div className="col s6"><img className="responsive-img z-depth-5" src="/assets/sport.jpg" alt="about-me-running" /></div>
            </div>
            <div className="row">
                <div className="col s6"><img className="responsive-img z-depth-5" src="/assets/guitar.jpg" alt="about-me-running" /></div>
                <div className="col s6">
                    <h2>Playing guitar</h2>
                    <p>In this year (2020), during the lockdown I started to practice to play guitar more seriously, I couldn't call it my passion, but it helps me to bring out the creative side of mine. For now I reached some basic beginner level, which is enough for others around me to not close their ears. :D Usually I'm watching youtube tutorials for practice, but I really draw a lot of inspiration from friends.
                    
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <h2>Reading books</h2>
                    <p>Books for me represents openness to the world, knowledge, and a place with shelter. As a young I never come out with books, it was like a punishment. Probably because it was a necessity and not a choice. But nowadays it become an everyday habit. I don't have a favorite book, because if I distinguish them as so, I would break my "rule" of reading, and that is, if I can learn or experience something new from them than it worth it reading.</p>
                </div>
                <div className="col s6"><img className="responsive-img z-depth-5" src="/assets/books.jpg" alt="about-me-running" /></div>
            </div>
        </div>
    </div>
);