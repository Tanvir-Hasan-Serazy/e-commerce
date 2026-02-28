const Faqs = [
  {
    id: 1,
    question: "What is NextJS?",
    answer: "It is a JavaScript Framework.",
  },
  {
    id: 2,
    question: "What is NextJS?",
    answer: "It is a JavaScript Framework.",
  },
  {
    id: 3,
    question: "What is NextJS?",
    answer: "It is a JavaScript Framework.",
  },
  {
    id: 4,
    question: "What is NextJS?",
    answer: "It is a JavaScript Framework.",
  },
  {
    id: 5,
    question: "What is NextJS?",
    answer: "It is a JavaScript Framework.",
  },
  {
    id: 6,
    question: "What is NextJS?",
    answer: "It is a JavaScript Framework.",
  },
  {
    id: 7,
    question: "What is NextJS?",
    answer: "It is a JavaScript Framework.",
  },
  {
    id: 8,
    question: "What is NextJS?",
    answer: "It is a JavaScript Framework.",
  },
  ,
];

export const HomeFaq = () => {
  return (
    <div className="max-w-7xl px-4 mx-auto my-6 lg:my-10">
      <h3 className="font-semibold text-lg lg:text-4xl leading-6 text-center text-orange-600 lg:pt-4">
        Frequently Ask Question (FAQ)
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 lg:py-8">
        {Faqs &&
          Faqs?.map((faq) => (
            <div
              className="space-y-4 border border-gray-200 rounded-md p-4"
              key={faq?.id}
            >
              <h3 className="text-base lg:text-lg font-medium">
                {faq?.question}
              </h3>
              <p className="text-sm lg:text-base">{faq?.answer} </p>
            </div>
          ))}
      </div>
    </div>
  );
};
