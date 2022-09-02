import React from "react";

const ContactCard = ({ text, href }) => {
  return (
    <code className="p-2 m-2">
      <b>
        {href ? (
          <a
            className="cursor-pointer hover:text-blue-700 underline"
            href={href}
          >
            {text}
          </a>
        ) : (
          text
        )}
      </b>
    </code>
  );
};

export default ContactCard;
