const Message = ({ message }) => {
    return (
        <span
            className={`${
                message.type === "error" ? "text-[red]" : "text-[green]"
            }`}
        >
            {message.text}
        </span>
    );
};

export default Message;
