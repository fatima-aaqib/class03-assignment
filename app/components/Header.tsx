import Link from "next/link";


export default function Header(){

return(





<header className="bg-cyan-800 h-14 ">



    <div className=" flex gap-40">

<Link href="/Home">

<h5 className="mt-3 font-bold">Home</h5>


</Link>





<Link href="/contact-us">


<h5 className="mt-3 font-bold">contact-us</h5>

</Link>



<Link href="/about-me">

<h5 className="mt-3 font-bold">about-me</h5>


</Link>
    
    </div>










</header>















)














}

