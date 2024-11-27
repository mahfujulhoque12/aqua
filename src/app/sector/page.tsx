import Archtectiture from "@/components/Archtectiture";
import InternationalProjects from "@/components/InternationalProjects";
import NRWLeakDetection from "@/components/NRWLeakDetection";
import RoadsBridges from "@/components/RoadsBridges";
import Sector from "@/components/Sector";
import Sewerage from "@/components/Sewerage";
import SolidWaste from "@/components/SolidWaste";
import StormWater from "@/components/StormWater";
import Torisum from "@/components/Torisum";

const page = () =>{
    return (
        <div>
            <Sector/>
            <Sewerage/>
            <StormWater/>
            <SolidWaste/>
            <NRWLeakDetection/>
            <RoadsBridges/>
            <Torisum/>
            <Archtectiture/>
            <InternationalProjects/>
        </div>
    )
}


export default page;