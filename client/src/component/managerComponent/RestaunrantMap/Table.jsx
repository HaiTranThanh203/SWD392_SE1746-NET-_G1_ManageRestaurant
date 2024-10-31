import React from "react";
import { useDrag } from "react-dnd";
import REACTANGE4 from "../../../assets/reactange4.png";
import REACTANGE6 from "../../../assets/reactange6.png";
import REACTANGE8 from "../../../assets/reactange8.png";
import ROUND4 from "../../../assets/round4.png";
import ROUND6 from "../../../assets/round6.png";
import ROUND8 from "../../../assets/round8.png";
import SQUARE4 from "../../../assets/square4.png";
import SQUARE6 from "../../../assets/square6.png";
import SQUARE8 from "../../../assets/square8.png";

const Table = ({
                   id,
                   typeTable,
                   positionX,
                   positionY,
                   name,
                   orderCurrent,
                   numberChairs,
               }) => {
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: "image",
            item: { id, typeTable, positionX, positionY },
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging(),
            }),
        }),
        [id, typeTable, positionX, positionY]
    );

    const tableImage = () => {
        if (typeTable === 1) {
            if (numberChairs === 4) return ROUND4;
            if (numberChairs === 6) return ROUND6;
            if (numberChairs === 8) return ROUND8;
        } else if (typeTable === 2) {
            if (numberChairs === 4) return SQUARE4;
            if (numberChairs === 6) return SQUARE6;
            if (numberChairs === 8) return SQUARE8;
        } else if (typeTable === 3) {
            if (numberChairs === 4) return REACTANGE4;
            if (numberChairs === 6) return REACTANGE6;
            if (numberChairs === 8) return REACTANGE8;
        }
        return null;
    };

    return (
        <div
            ref={drag}
            style={{
                position: "absolute",
                left: `${positionX}px`,
                top: `${positionY}px`,
                width: "150px",
                height: "150px",
                border: isDragging ? "5px solid pink" : "0px",
                opacity: isDragging ? 0.5 : 1,
            }}
        >
            {tableImage() && (
                <img
                    src={tableImage()}
                    alt={`Table ${id}`}
                    className="object-cover block w-[150px] h-[150px]"
                />
            )}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontWeight: "bold",
                    textAlign: "center",
                    width: "100%",
                    zIndex: 10,
                    color: orderCurrent === null ? "white" : "red",
                    pointerEvents: "none",
                }}
            >
                {name}
            </div>
        </div>
    );
};

export default Table;
