import axios from "axios";
import React, { useCallback, useState } from "react";
import { FaStar } from "react-icons/fa";
import Cookies from "js-cookies";
const StarRating = ({ id, rate }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(rate);
  const [token, setToken] = useState(Cookies.getItem("token"));
  async function Submit(rate) {
    axios
      .post(
        `http://127.0.0.1:8000/api/user/rate/${id}`,
        {
          rating: rate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const handleRating = useCallback(
    (rate) => {
      setHover(rate);
    },
    [setHover]
  );
  return (
    <div className="flex flex-row">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={(index) => {
                setRating(currentRating);
                Submit(currentRating);
              }}
              className="hidden"
            />
            <FaStar
              className="cursor-pointer"
              size={25}
              color={currentRating <= (hover || rating) ? "#ffc107" : "e4e5e9"}
              onMouseEnter={() => handleRating(currentRating)}
              onMouseLeave={() => handleRating(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
