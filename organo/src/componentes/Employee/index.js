import { IoMdCloseCircle } from "react-icons/io";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Employee.css"

const Employee = ({ imagem, nome, cargo, color, id, onDelete, isFavorite, onFavorite }) => {
    function favorite() {
        onFavorite(id);
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
                    {isFavorite ? <AiFillHeart color="#ff0000" size={25} onClick={favorite} /> : <AiOutlineHeart color="#000000" size={25} onClick={favorite} />}
                </div>
            </div>
        </div>
    )
}

export default Employee;