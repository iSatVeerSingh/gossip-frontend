const Message = ({ type, msgText, time }) => {
  return (
    <div
      className={`max-w-[500px] text-white p-2 rounded-md relative ${
        type === "incoming" ? "bg-gossip-dark-07" : "bg-gossip-dark-08 self-end"
      }`}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla at
        dolor perferendis est, pariatur, veritatis modi placeat, iusto ad
        dolorum nam distinctio eius? Dicta, eius. Molestiae vel vero tempora!
      </p>
      <span
        className={`absolute top-0 ${
          type === "incoming"
            ? "right-0 translate-x-[110%]"
            : "left-0 -translate-x-[110%]"
        }`}
      >
        8:00 PM
      </span>
    </div>
  );
};

export default Message;
