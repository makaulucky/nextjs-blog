import Head from 'next/head'
import Image from 'next/image'

export default function Me() {
    

const ImageComponent = () => (
  <div>
    <Image
        src="/images/profile.jpg" // Route of the image file
        height={200} // Desired size with correct aspect ratio
        width={200} // Desired size with correct aspect ratio
        alt="Lucky Makau"
    />
  </div>
)
  return (
      <>
    <Head>
        <title>Lucky Makau | About Me</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1>About Me</h1>
                <p>
                    I am a software developer with a passion for learning and problem solving. I am currently working as a software developer at <a href="https://www.truelancer.com/">TrueLancer</a> where I work on a variety of projects ranging from web development to mobile development.
                </p>
                <p>
                    I am currently working on a project called <a href="https://www.truelancer.com/projects/web-development/lucky-makau">Lucky Makau</a> which is a web application that allows users to create and share polls.
                </p>
                

                <h2>Education</h2>
                <p>
                    I have completed my Bachelor of Science in Computer Science at the University of Nairobi.   I have a keen interest in software development and have been working on various projects in the past.
                </p>
                <p>
                    I have also completed a certificate in Full Stack Web Development from <a href="https://www.codecademy.com/">Code Academy</a> and have been working on various projects in the past.
                </p>
                
                <h2>Skills</h2>
                <p>
                    I have a wide range of skills ranging from front end development to back end development. I have experience in working with various languages such as Java, Python, PHP, JavaScript, HTML, CSS, and SQL.
                </p>
                <p>
                    I have also worked with various frameworks such as React, Node, Express, and Django.
                </p>
                <p>
                    I have also worked with various databases such as MySQL, MongoDB, and PostgreSQL.
                </p>
                <p>
                    I have also worked with various version control systems such as Git, GitHub, and Bitbucket.
                </p>
                
                <h2>Contact</h2>
                <p>
                    You can contact me on <a href="https://twitter.com/makaulucky">Twitter</a>, <a href="https://www.linkedin.com/in/lucky-makau-a8a8b8b4/">LinkedIn</a>
                </p>
            </div>
        </div>
    </div>
    </>
    )
}

