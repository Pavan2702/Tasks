import Image from "next/image";
import RoboIcon from "../../../public/RoboIcon.svg";

const Header = () => (
    <header className="bg-[#008B5D] flex items-center text-white p-6 rounded-lg mb-6 shadow-md">
        {/* Icon */}
        <div className="mr-4">
            <Image src={RoboIcon} alt="Premium Icon" height={72} width={72} className="min-h-[72px] max-h-[72px] max-w-[72px] min-w-[72px] "/>
        </div>
        
        {/* Text Content */}
        <div>
            <h1 className="text-[24px] font-semibold mb-1">Premium Account</h1>
            <p className="text-sm">
                You have a premium account, granting you access to all the remarkable features offered by ResumeDone. With this privilege, you can indulge in the freedom of downloading an unlimited number of resumes and cover letters in both PDF and Word formats.
            </p>
        </div>
    </header>
);

export default Header;
