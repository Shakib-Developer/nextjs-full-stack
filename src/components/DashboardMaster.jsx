import Link from "next/link";
import { useState } from "react";
import { FaBlog, FaBuffer, FaMendeley } from "react-icons/fa6";
import { ErrorToast, SuccessToast } from "@/utility/FormHelper";

export default function DashboardMaster(props) {
  const [submit, setSubmit] = useState(false);
  const onLogout = async () => {
    setSubmit(true);
    let res = await fetch("/api/user/login");
    let ResJson = await res.json();
    setSubmit(false);
    if (ResJson["status"] === "success") {
      SuccessToast("Logout Success");
      window.location.href = "/";
    } else {
      ErrorToast("Request Fail");
    }
  };

  return (
    <main>
      <section className="relative ">
        <div className=" flex gap-[30px]">
          <div className="w-[300px] h-screen">
            <div className="px-4 py-5 border-r border-gray-300 h-screen">
              <div className="logo">
                <Link href={"/"}>
                  <h3 className="text-2xl font-bold uppercase text-red-500">
                    mega blog
                  </h3>
                </Link>
              </div>
              <br />
              <br />
              <nav>
                <ul>
                  <li>
                    <Link className="navLink" href="/dashboard">
                      <FaBuffer /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="navLink" href="/dashboard/service">
                      <FaMendeley /> Service
                    </Link>
                  </li>
                  <li>
                    <Link className="navLink" href="/dashboard/blog">
                      <FaBlog /> Blog
                    </Link>
                  </li>
                  {props.firstName === "0" ? (
                    <Link
                      href="/login"
                      className="mr-2 inline-block px-4 py-3 text-xs text-red-600 hover:text-red-700 font-semibold leading-none border border-red-200 hover:border-red-300 rounded"
                    >
                      Login
                    </Link>
                  ) : (
                    <div
                      onClick={onLogout}
                      submit={submit}
                      className="w-full mt-10 px-4 py-3 text-xs text-center text-white bg-red-700 hover:bg-red-600 font-semibold leading-none border rounded cursor-pointer transition-all"
                    >
                      Logout
                    </div>
                  )}
                </ul>
              </nav>
            </div>
          </div>
          <div className="w-full">{props.children}</div>
        </div>
      </section>
    </main>
  );
}
