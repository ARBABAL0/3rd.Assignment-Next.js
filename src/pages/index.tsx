import Link from "next/link"

export default function Home() {
  return (
  <div>
    <h1 className="text-blue-900 text-center"> Golden Stitch Nation </h1>
    <Link className="mr-5 hover:text-blue-900" href={"http://localhost:3000"}> Home </Link>
    <Link className="mr-5 hover:text-blue-900" href={"http://localhost:3000/aboutus"}> About Us </Link>
    <Link className="mr-5 hover:text-blue-900" href={"http://localhost:3000/contactus"}> Contact Us </Link>
    <Link className="mr-5 hover:text-blue-900" href={"http://localhost:3000/privacypolicy"}> Privacy Policy </Link>
    <br />
    <br />


    
          {/* website*/}
    <a href="https://www.linkedin.com/in/arbab-ali-25b851291/">

<button className="flex mx-auto mt-16 text-white bg-blue-500 border-3 py-2 px-8 foucs:outline-square text-large">Visit My Website </button>
</a>

      </div>

  )
}