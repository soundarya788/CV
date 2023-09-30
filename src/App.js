import React from 'react'
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='left-column'>
      <header>
    <h1>S.Soundarya Priyadharshini</h1>
    
    </header>

    <section className='detail'>
      <h2>contact</h2>
      <p>Email: soundaryaa040@gmail.com</p>
      <p>Phone no: 9444151900</p>
      <p>Address: NO:99, 5TH CROSS STREET AMBETHKAR NAGAR MADHAVARAM , CHENNAI-600110</p>

    </section> 

    <section className='skills'>
      <h2>skills</h2>
      <ul>
        
      <li>Reactjs</li>
      <li>HTML&CSS</li>
      <li>Javascript</li>
      <li>AWS</li>
      </ul>

    </section>

    <section className='langauage'>
      <h2>language</h2>
      <ul>
      <li>English</li>
      <li>Tamil</li>
      <li>Telugu</li>
      
    
      </ul>

    </section>

    <section className='hobbies'>
      <h2>Hobbies</h2>
      <ul>
      <li>Playing chess</li>
      <li>Reading</li>
      <li>Cooking</li>
      <li>Traveling</li>
      <li>Adaptability</li>
      <li>Leadership Skills 
</li>
<li>Problem - Solving </li>
    
      
    
      </ul>

    </section>


    </div>

    <div className='right-column'>
      <section className='summary'>
        <h2>Objective:  <p>My goal is to become associated with a company where I can utilize my skills and gain further experience while enhancing the company’s productivity and reputation.  
To get an opportunity that allows me to showcase my skills and contribute to the 
company's growth. </p>
</h2>

      </section>
      <section className='experience'>
        <h2>Experience:</h2>
        <h4>Web developer</h4>
        <p>March 2023- september 2023</p>
        <ul>
          <li>Develop and maintain company websites, improving user experience and performance</li>
          <li>Collaborate with cross-functional teams to deliver high-quality web applications.</li>
          <li>Implement responsive web design and accessibility best practices.</li>
        </ul>

      </section>

      <strong>Education:</strong>
      <div className="education">
            <div className="table-row header-row">
              <div className="table-cell">Degree</div>
              <div className="table-cell">Umiversity</div>
              <div className="table-cell">Year</div>
            </div>
            <div className="table-row">
              <div className="table-cell">B.E (ECE)</div>
              <div className="table-cell">Chennai institute of technology</div>
              <div className="table-cell">2020</div>
            </div>
            <div className="table-row">
              <div className="table-cell">12th</div>
              <div className="table-cell">St.Anne's Girls hr.sec.school</div>
              <div className="table-cell">May 2016</div>
            </div>
            <div className="table-row">
              <div className="table-cell">10th</div>
              <div className="table-cell">St.Anne's Girls hr.sec.school</div>
              <div className="table-cell">May 2014</div>
            </div>
          
          </div>

          <section className='experience'>
        <h4>Strength:</h4>
        
        <ul>
          <li>Teamwork,Adaptive, Hardworking,Sincerity,Time management</li>
          <li>planning and creativity. Eager to face challenges and never </li>
          <li>misses opportunities to learn</li>
        </ul>

      </section>


    </div>
    </div>


  )
}

export default App