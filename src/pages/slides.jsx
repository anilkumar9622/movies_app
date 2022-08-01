import React , {} from 'react';

function Slides({slides}) {
  const data = slides.slides
   const handle = () => {
     
   }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button onClick={handle} data-testid="button-restart" className="small outlined">Restart</button>
                <button onClick={handle} data-testid="button-prev" className="small">Prev</button>
                <button onClick={handle} data-testid="button-next" className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
    <h1 data-testid="title">{data.title}ssssssssssssssssssssss</h1>
    <p data-testid="text">{data.text}</p>
            </div>
        </div>
    );

}

export default Slides;
