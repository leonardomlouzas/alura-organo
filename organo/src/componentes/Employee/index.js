import { IoMdCloseCircle } from "react-icons/io";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Employee.css"

const Employee = ({ imagem, nome, cargo, color, id, onDelete, isFavorite, onFavorite }) => {
    const heart_props = {
        color: isFavorite ? "#ff0000" : "#000000",
        size: 25,
        onClick: favorite,
        style: { cursor: "pointer" },
    }
    function favorite() {
        onFavorite(id, isFavorite);
    }

    return (
        <div className="employee">
            <IoMdCloseCircle
                size={25}
                className="delete"
                onClick={() => onDelete(id)}
            />
            <div className="header" style={{ backgroundColor: color }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className="favorite">
                    {isFavorite ? <AiFillHeart {...heart_props} /> : <AiOutlineHeart {...heart_props} />}
                </div>
            </div>
        </div>
    )
}

export default Employee;