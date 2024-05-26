import { IoIosGlobe, IoIosMail, IoLogoGithub, IoLogoLinkedin, IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const PersonalInfo = () => {
  return (
    <div className="flex justify-between bg-white shadow-md rounded-md px-8 py-6 w-[100%] xl:w-[1200px]">
      <div>
        <p className="text-lg  flex items-center gap-4"><IoMdPerson /> Sayan Maity</p>
        <p className="text-lg  flex items-center gap-4"><IoIosMail /> sayancr777@gmail.com</p>
        <p className="text-lg  flex items-center gap-4"><FaPhoneAlt /> 9674533907</p>
      </div>
      <div>
        <p className="flex text-lg  gap-4 items-center">
          <IoIosGlobe />
          <a href="https://sayan-maity.netlify.app/" target="_blank" className="underline text-blue-600 ">Portfolio</a>
        </p>
        <p className="flex text-lg  items-center gap-4">
          <IoLogoLinkedin />
          <a href="https://www.linkedin.com/in/sayan-maity2003/" target="_blank" className="underline text-blue-600"> Linkedin</a>
        </p>
        <p className="flex text-lg  items-center gap-4">
          <IoLogoGithub />
          <a href="https://github.com/Sayan-Maity" target="_blank" className="underline text-blue-600 "> Github</a>
        </p>
      </div>
    </div>
  )
}

export default PersonalInfo
