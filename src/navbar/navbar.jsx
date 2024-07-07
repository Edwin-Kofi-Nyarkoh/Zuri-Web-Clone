// import {image} from "../../public"

function Navbar(){
    return(
        <div className="mb-1 py-4 flex items-center justify-around top-0">
            {/* <img src={image} alt="" /> */}
            <h4 className=" text-4xl font-bold">zuri Team</h4>
            <div className="flex gap-5 items-center justify-center">
            <p className="text-2xl">For Business</p>
            <p className="text-2xl">For NGO's</p>
            <p className="text-2xl">Trainings</p>
            <p className="text-2xl text-red-500">Resolution</p>
            </div>
            <div className="flex items-center gap-4">
            <button className="rounded border-2 border-black px-2">Partner With Us</button>
            <button className="text-white bg-red-500 rounded px-2 py-1">Start Learning</button>
            </div>
        </div>
    )
}
export default Navbar