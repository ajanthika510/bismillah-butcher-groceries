import { useEffect, useState } from "react";

import { FaTrash, FaEnvelope } from "react-icons/fa";

import API from "../services/api";

function AdminMessages() {

  const [messages, setMessages] =
    useState([]);

  useEffect(() => {

    fetchMessages();

  }, []);

  const fetchMessages = async () => {

    try {

      const res =
        await API.get("/messages");

      setMessages(res.data);

    } catch (error) {

      console.log(error);
    }
  };

  const deleteMessage = async (id) => {

    try {

      await API.delete(
        `/messages/${id}`
      );

      fetchMessages();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div
      className="
        min-h-screen
        bg-zinc-100
        p-4
        md:p-10
        pt-28
      "
    >

      {/* TITLE */}

      <div
        className="
          flex
          items-center
          gap-4
          mb-10
        "
      >

        <div
          className="
            w-14
            h-14
            rounded-2xl
            bg-green-500
            text-white
            flex
            items-center
            justify-center
            text-2xl
          "
        >
          <FaEnvelope />
        </div>

        <div>

          <h1
            className="
              text-3xl
              md:text-4xl
              font-black
            "
          >
            Customer Messages
          </h1>

          <p className="text-gray-500">
            Manage customer inquiries
          </p>

        </div>

      </div>


      {/* MESSAGES */}

      <div className="grid gap-6">

        {
          messages.length === 0
            ? (

              <div
                className="
                  bg-white
                  rounded-3xl
                  p-10
                  shadow-lg
                  text-center
                  text-gray-500
                "
              >
                No messages yet.
              </div>

            ) : (

              messages.map((msg) => (

                <div
                  key={msg.id}
                  className="
                    bg-white
                    p-6
                    rounded-3xl
                    shadow-lg
                    border
                    border-zinc-200
                  "
                >

                  <div
                    className="
                      flex
                      justify-between
                      items-start
                      gap-4
                    "
                  >

                    <div>

                      <h2
                        className="
                          text-2xl
                          font-bold
                        "
                      >
                        {msg.name}
                      </h2>

                      <p className="text-gray-500">
                        {msg.email}
                      </p>

                    </div>

                    <button
                      onClick={() =>
                        deleteMessage(msg.id)
                      }
                      className="
                        bg-red-500
                        hover:bg-red-600
                        transition
                        text-white
                        p-3
                        rounded-xl
                      "
                    >
                      <FaTrash />
                    </button>

                  </div>

                  <h3
                    className="
                      mt-5
                      text-lg
                      font-bold
                    "
                  >
                    {msg.subject}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-gray-700
                      leading-relaxed
                    "
                  >
                    {msg.message}
                  </p>

                </div>

              ))
            )
        }

      </div>

    </div>
  );
}

export default AdminMessages;