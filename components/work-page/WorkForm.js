import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

const WorkForm = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scroll({
        top: 850,
        behavior: "smooth",
      });
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const dateInputRef = useRef();
  const eventInputRef = useRef();
  const detailsInputRef = useRef();

  const [checkBox, setCheckBox] = useState(true);

  const checkBoxHandler = () => {
    setCheckBox((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const formBody = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      date: dateInputRef.current.value,
      event: eventInputRef.current.value,
      details: detailsInputRef.current.value,
      checkBox: checkBox,
    };

    console.log(formBody);

    const response = await fetch("/api/customer-details", {
      method: "POST",
      body: JSON.stringify(formBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Sorry, we could not send your details.");
    }

    const data = await response.json();

    console.log(data);

    window.alert(data.message);

    router.push("/");
  };

  return (
    <div className="max-w-[760px] mx-auto my-10 px-12 py-12 rounded-lg shadow-lg shadow-slate-700">
      <h2 className="text-2xl font-bold">Your Details</h2>
      <form className="mt-8 max-w-md" onSubmit={submitHandler}>
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-700">Full name</span>
            <input
              ref={nameInputRef}
              type="text"
              className="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          "
              placeholder="name"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Email address</span>
            <input
              ref={emailInputRef}
              type="email"
              className="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          "
              placeholder="john@example.com"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">When is your event?</span>
            <input
              ref={dateInputRef}
              type="date"
              className="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          "
            />
          </label>
          <label className="block">
            <span className="text-gray-700">What type of event is it?</span>
            <select
              ref={eventInputRef}
              className="
            block
            w-full
            mt-1
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          "
            >
              <option>Corporate event</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Other</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">Additional details</span>
            <textarea
              ref={detailsInputRef}
              className="
            mt-1
            block
            w-full
            rounded-md
            border-gray-300
            shadow-sm
            focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
          "
              rows="3"
            ></textarea>
          </label>
          <div className="block">
            <div className="mt-2">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    value={checkBox}
                    onChange={checkBoxHandler}
                    className="
                  rounded
                  border-gray-300
                  text-indigo-600
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
                    defaultChecked
                  />
                  <span className="ml-2">Email me news and special offers</span>
                </label>
              </div>
            </div>
          </div>
          <button
            className="border rounded p-2 bg-zinc-700 text-white hover:scale-105 transition ease-in duration-200 active:translate-y-2"
            type="submit"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkForm;
