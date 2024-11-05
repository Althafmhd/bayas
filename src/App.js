import React from 'react';
import EBNavbar from './EBComponents/EBNavbar';
import {Route,Routes} from 'react-router-dom'
import Adddeletemeter from './EBComponents/EBPages/Adddeletemeter';
import ViewMetervalue from './EBComponents/EBPages/ViewMetervalue';
import TKMBlock from './EBComponents/EBPages/TKMBlock';
import EBReader from './EBComponents/EBPages/EBReader';
import OBBlock from './EBComponents/EBPages/OBBlock';
function App() {
  return (
    <div className="App">
        < EBNavbar />
        <Routes>
          <Route path="/" element={<EBReader />} />
          <Route path="/TKMBlock" element={<TKMBlock />} />
          <Route path="/OBBlock" element={<OBBlock />} />
          <Route path="/AddDeleteMeter" element={<Adddeletemeter />} />
          <Route path="/ViewMeterValue" element={<ViewMetervalue />} />
        </Routes>
    </div>
  );
}

export default App;
