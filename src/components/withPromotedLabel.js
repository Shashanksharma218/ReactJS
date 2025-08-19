// import Card from "./Card";
const withPromotedLabel = (Card) => {
    return (props) => {
        return (
            <div style={{ position: "relative" }}>
                <label
                    className="absolute top-0 left-6 bg-gradient-to-b from-blue-800 to-blue-500 text-white text-xs tracking-wide z-10 px-1.5 pt-0.5 pb-1.5"
                    style={{
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 75%, 50% 100%, 0% 75%)",
                        boxShadow: "0 2px 8px rgba(0, 45, 129, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                    }}>Promoted</label>
                <Card resData={props.resData} />
            </div>
        );
    }
}

export default withPromotedLabel;