// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker,
// } from "react-simple-maps";
// const geoUrl =
//   "https://raw.githubusercontent.com/giuliano-macedo/geodata-br-states/refs/heads/main/geojson/br_states.json";
export function MembersMap() {
  return (
    
    <div className="text-center items-center"> 
<img className="h-auto md:h-128 grayscale" src="/imgs/mapaDoBrasil.png" alt="" />     
      </div>
  );
}
//codigo do mapa que eu tinha usado
//  <ComposableMap
//         projection="geoMercator"
//         projectionConfig={{
//           center: [-55, -15],
//           scale: 550,
          
//         }}
//               style={{ width: "100%", height: "100%" }}

//       >
//         <Geographies geography={geoUrl}>
//           {({ geographies }) =>
//             geographies.map((geo) => (
//               <Geography
//                 key={geo.rsmKey}
//                 geography={geo}
//                 fill="#c084fc"
//                 stroke="#a855f7"
//                 strokeWidth={0.2}
//                 style={{
//                   default: { outline: "none" },
//                   hover: { fill: "#a855f7", outline: "none" },
//                   pressed: { fill: "#4338ca", outline: "none" },
//                 }}
//               />
//             ))
//           }
//         </Geographies>
//         <Marker coordinates={[-41.7, -12.96]}>
//           {/* Coordenadas aproximadas do centro da Bahia /, pro vinny, ainda vou organizar isso, mas se alguem queiser fazer por mim fique a vontade kkkkkkkk, tem que passar as cordenadas de cada um no members.json e renderizar isso aqui de forma dinamica*/}
//           <image
//             href="https://cdn-icons-png.flaticon.com/512/684/684908.png" // exemplo de ícone
//             height={24}
//             width={24}
//             x={-12}
//             y={-12}
//           />
         
//         </Marker>
//       </ComposableMap>