import React from 'react';

const Blogs = () => {
  const cardsData = [
    {
      imageUrl: "https://source.unsplash.com/600x400/?computer",
      tagColor: "bg-gradient-to-b from-blue-600 to-blue-400 text-white",
      tagText: "Technology",
      title: "What's new in 2022 Tech",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",
      userImage: "https://i.pravatar.cc/40?img=1",
      userName: "Jane Doe",
      timeAgo: "2h ago"
    },
    {
      imageUrl: "https://source.unsplash.com/600x400/?food",
      tagColor: "bg-gradient-to-b from-yellow-400 to-orange-500 text-white",
      tagText: "Food",
      title: "Delicious Food",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",
      userImage: "https://i.pravatar.cc/40?img=2",
      userName: "Jony Doe",
      timeAgo: "Yesterday"
    },
    {
      imageUrl: "https://source.unsplash.com/600x400/?car,automobile",
      tagColor: "bg-gradient-to-b from-red-500 to-red-700 text-white",
      tagText: "Automobile",
      title: "Race to your heart content",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!",
      userImage: "https://i.pravatar.cc/40?img=3",
      userName: "John Doe",
      timeAgo: "2d ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-300 via-purple-300 to-gray-400 flex items-center justify-center">
      <section className="flex flex-wrap justify-center max-w-screen-xl mx-auto my-8 gap-8">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col w-[clamp(20rem,calc(20rem+2vw),22rem)] overflow-hidden shadow-lg rounded-lg bg-gradient-to-r from-white to-gray-100"
          >
            <div>
              <img src={card.imageUrl} alt="card_image" className="w-full object-cover" />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <span className={`self-start px-3 py-1 rounded-full text-xs ${card.tagColor}`}>
                {card.tagText}
              </span>
              <h4 className="text-xl capitalize">{card.title}</h4>
              <p>{card.description}</p>
            </div>
            <div className="flex p-4 mt-auto">
              <div className="flex gap-2">
                <img src={card.userImage} alt="user_image" className="w-10 h-10 rounded-full" />
                <div>
                  <h5>{card.userName}</h5>
                  <small className="text-gray-500">{card.timeAgo}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blogs;
