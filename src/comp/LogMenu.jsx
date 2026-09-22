import { Link } from "react-router-dom";
import { MdLocalMovies } from "react-icons/md";
import { RiVoiceRecognitionFill } from "react-icons/ri";
import { RiFileTextLine } from "react-icons/ri";
import { IoDocumentTextSharp } from "react-icons/io5";

function Log001Card() {
  const media = "/log1.mp4"
    return (
    <Link to="/log001" state={{ media }} style={{ textDecoration: "none" }}>
      <div style={{ position: "fixed", top: "15%", left: "10%", padding: "30px", border: "0px solid #deb887", borderRadius: "8px", cursor: "pointer" }}>
        <MdLocalMovies className="text-6xl text-[#deb887] justify-center" />
        <h2 className="logcards">log001</h2>
      </div>
    </Link>
  );
}

function Log002Card() {
  const media = "/log2.mp4"
    return (
    <Link to="/log002" state={{ media }} style={{ textDecoration: "none" }}>
      <div style={{ position: "fixed", top: "25%", left: "10%", padding: "30px", border: "0px solid #deb887", borderRadius: "8px", cursor: "pointer" }}>
        <MdLocalMovies className="text-6xl text-[#deb887] justify-center" />
        <h2 className="logcards">log002</h2>
      </div>
    </Link>
    
  );
}

function Log003Card() {
  const media = "/log3.mp4"
    return (
    <Link to="/log003" state={{ media }} style={{ textDecoration: "none" }}>
      <div style={{ position: "fixed", top: "35%", left: "10%", padding: "30px", border: "0px solid #deb887", borderRadius: "8px", cursor: "pointer" }}>
        <MdLocalMovies className="text-6xl text-[#deb887] justify-center" />
        <h2 className="logcards">log003</h2>
      </div>
    </Link>
    
  );
}

function Log004Card() {
  const media = "/log4.mp4"
    return (
    <Link to="/log004" state={{ media }} style={{ textDecoration: "none" }}>
      <div style={{ position: "fixed", top: "45%", left: "10%", padding: "30px", border: "0px solid #deb887", borderRadius: "8px", cursor: "pointer" }}>
        <MdLocalMovies className="text-6xl text-[#deb887] justify-center" />
        <h2 className="logcards">log004</h2>
      </div>
    </Link>
  );
}

function Log005Card() {
  const media = "/log5.mp4"
    return (
    <Link to="/log005" state={{ media }} style={{ textDecoration: "none" }}>
      <div style={{ position: "fixed", top: "55%", left: "10%", padding: "30px", border: "0px solid #deb887", borderRadius: "8px", cursor: "pointer" }}>
        <MdLocalMovies className="text-6xl text-[#deb887] justify-center" />
        <h2 className="logcards">log005</h2>
      </div>
    </Link>
  );
}

function Log006Card() {
  const media = "/log6.mp4"
    return (
    <Link to="/log006" state={{ media }} style={{ textDecoration: "none" }}>
      <div style={{ position: "fixed", top: "65%", left: "10%", padding: "30px", border: "0px solid #deb887", borderRadius: "8px", cursor: "pointer" }}>
        <MdLocalMovies className="text-6xl text-[#deb887] justify-center" />
        <h2 className="logcards">log006</h2>
      </div>
    </Link>
  );
}

function Log007Card() {
  const media = "/log7.mp4"
    return (
    <Link to="/log007" state={{ media }} style={{ textDecoration: "none" }}>
      <div style={{ position: "fixed", top: "15%", left: "15%", padding: "30px", border: "0px solid #deb887", borderRadius: "8px", cursor: "pointer" }}>
        <MdLocalMovies className="text-6xl text-[#deb887] justify-center" />
        <h2 className="logcards">log007</h2>
      </div>
    </Link>
  );
}

function Log008Card() {
  const media = "/log8.mp4"
    return (
    <Link to="/log008" state={{ media }} style={{ textDecoration: "none" }}>
      <div style={{ position: "fixed", top: "25%", left: "15%", padding: "30px", border: "0px solid #deb887", borderRadius: "8px", cursor: "pointer" }}>
        <MdLocalMovies className="text-6xl text-[#deb887] justify-center" />
        <h2 className="logcards">log008</h2>
      </div>
    </Link>
  );
}

function Log009Card() {
  const media = "/log9.mp4"
    return (
    <Link to="/log009" state={{ media }} style={{ textDecoration: "none" }}>
      <div style={{ position: "fixed", top: "35%", left: "15%", padding: "30px", border: "0px solid #deb887", borderRadius: "8px", cursor: "pointer" }}>
        <MdLocalMovies className="text-6xl text-[#deb887] justify-center" />
        <h2 className="logcards">log009</h2>
      </div>
    </Link>
  );
}

function Log010Card() {
  const media = "/log10.mp4"
    return (
    <Link to="/log010" state={{ media }} style={{ textDecoration: "none" }}>
      <div style={{ position: "fixed", top: "45%", left: "15%", padding: "30px", border: "0px solid #deb887", borderRadius: "8px", cursor: "pointer" }}>
        <MdLocalMovies className="text-6xl text-[#deb887] justify-center" />
        <h2 className="logcards">log010</h2>
      </div>
    </Link>
  );
}

function AudioLog001Card() {
  const media = "/audiotestbeat.mp3";
  return (
    <Link to="/audio001" state={{ media }} style={{ textDecoration: "none" }}>
      <div style={{ position: "fixed", top: "55%", left: "15%", padding: "30px", border: "0px solid #deb887", borderRadius: "8px", cursor: "pointer" }}>
        <RiVoiceRecognitionFill className="text-6xl text-[#deb887] justify-center" />
        <h2 className="logcards">audio001</h2>
      </div>
    </Link>
  );
}

function AudioLog002Card() {
  const media = "/audiotestbeat2.mp3";
  return (
    <Link to="/audio002" state={{ media }} style={{ textDecoration: "none" }}>
      <div style={{ position: "fixed", top: "65%", left: "15%", padding: "30px", border: "0px solid #deb887", borderRadius: "8px", cursor: "pointer" }}>
        <RiVoiceRecognitionFill className="text-6xl text-[#deb887] justify-center" />
        <h2 className="logcards">audio002</h2>
      </div>
    </Link>
  );
}

function TextLog001Card() {
  return (
    <Link to="/text001" style={{ textDecoration: "none" }}>
      <div style={{ position: "fixed", top: "15%", left: "20%", padding: "30px", border: "0px solid #deb887", borderRadius: "8px", cursor: "pointer" }}>
        <IoDocumentTextSharp className="text-6xl text-[#deb887] justify-center" />
        <h2 className="logcards">text001</h2>
      </div>
    </Link>
  );
}

function TextLog002Card() {
  return (
    <Link to="/text002" style={{ textDecoration: "none" }}>
      <div style={{ position: "fixed", top: "25%", left: "20%", padding: "30px", border: "0px solid #deb887", borderRadius: "8px", cursor: "pointer" }}>
        <IoDocumentTextSharp className="text-6xl text-[#deb887] justify-center" />
        <h2 className="logcards">text002</h2>
      </div>
    </Link>
  );
}

function TextLog003Card() {
  return (
    <Link to="/text003" style={{ textDecoration: "none" }}>
      <div style={{ position: "fixed", top: "35%", left: "20%", padding: "30px", border: "0px solid #deb887", borderRadius: "8px", cursor: "pointer" }}>
        <IoDocumentTextSharp className="text-6xl text-[#deb887] justify-center" />
        <h2 className="logcards">text003</h2>
      </div>
    </Link>
  );
}

function TextLog004Card() {
  return (
    <Link to="/text004" style={{ textDecoration: "none" }}>
      <div style={{ position: "fixed", top: "45%", left: "20%", padding: "30px", border: "0px solid #deb887", borderRadius: "8px", cursor: "pointer" }}>
        <IoDocumentTextSharp className="text-6xl text-[#deb887] justify-center" />
        <h2 className="logcards">text004</h2>
      </div>
    </Link>
  );
}

export { Log001Card, Log002Card, Log003Card, Log004Card, Log005Card, Log006Card, Log007Card, Log008Card, Log009Card, Log010Card, AudioLog001Card, AudioLog002Card, TextLog001Card, TextLog002Card, TextLog003Card, TextLog004Card };