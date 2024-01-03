import React from 'react';
import './App.css';
function App() {

   return (
    <div>
      <div className="envelope">
          <div className="mailing-label from-label">
            <div className="name">P Bresnahan</div>
            <div className="addressLine1">987 Kilbreth Lane</div>
            <div className="addressLine2">Boston, MA 02118</div>
          </div>  
          <div className="mailing-label to-label">
            <div className="name">J Callahan</div>
            <div className="addressLine1">123 West St</div>
            <div className="addressLine2">Boston, MA 02118</div>
          </div>      
          <div>
            <span className="stamp">Stamp</span>
          </div>
      </div>
    </div>
  );
}

export default App;
