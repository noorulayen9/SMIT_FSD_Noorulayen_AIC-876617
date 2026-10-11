import { useState } from "react";

function Reviews() {
  const [liked, setLiked] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const submitReview = (e) => {
    e.preventDefault();

    if (!liked) {
      setMessage("Please select Yes or No.");
      return;
    }

    if (!comment.trim()) {
      setMessage("Please write your feedback.");
      return;
    }

    console.log({
      helpful: liked,
      comment: comment,
    });

    setMessage("Thank you for your feedback.");

    setLiked("");
    setComment("");
  };

  return (
    <main className="min-h-screen bg-[#fffaf5] px-5 py-16">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            Chaudhary Brothers
          </p>

          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            We Value Your Feedback
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Your feedback helps us improve our website and
            provide a better experience.
          </p>
        </div>

        {/* Feedback Card */}
        <div className="mx-auto max-w-2xl rounded-2xl border border-orange-100 bg-white p-7 shadow-sm md:p-10">

          <form onSubmit={submitReview}>

            {/* Question */}
            <h2 className="mb-7 text-xl font-semibold text-gray-900">
              Was this website helpful to you?
            </h2>

            {/* Yes / No */}
            <div className="grid gap-4 sm:grid-cols-2">

              <button
                type="button"
                onClick={() => {
                  setLiked("Yes");
                  setMessage("");
                }}
                className={`rounded-xl border-2 px-5 py-4 font-semibold transition ${
                  liked === "Yes"
                    ? "border-orange-500 bg-orange-50 text-orange-600"
                    : "border-gray-200 text-gray-800 hover:border-orange-300"
                }`}
              >
                Yes
              </button>

              <button
                type="button"
                onClick={() => {
                  setLiked("No");
                  setMessage("");
                }}
                className={`rounded-xl border-2 px-5 py-4 font-semibold transition ${
                  liked === "No"
                    ? "border-orange-500 bg-orange-50 text-orange-600"
                    : "border-gray-200 text-gray-800 hover:border-orange-300"
                }`}
              >
                No
              </button>

            </div>

            {/* Comment */}
            <div className="mt-8">

              <label className="mb-2 block text-sm font-semibold text-gray-800">
                Your Feedback
              </label>

              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={
                  liked === "No"
                    ? "If you don't like it, please tell us why."
                    : "Please share your feedback."
                }
                rows={6}
                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-100"
              />

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-orange-500 py-3.5 font-semibold text-white transition hover:bg-orange-600"
            >
              Submit Feedback
            </button>

            {/* Message */}
            {message && (
              <p className="mt-4 text-center text-sm font-medium text-orange-600">
                {message}
              </p>
            )}

          </form>
        </div>

      </div>
    </main>
  );
}

export default Reviews;
