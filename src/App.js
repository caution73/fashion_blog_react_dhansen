import './style.css';
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";

const articles = [{time:"11/12/20", postTitle:"On the Street in Brooklyn", imageSrc:"blog-image-1.jpg", imageAlt:"Girl on a street.", articleContent:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, obcaecati soluta. Et labore quibusdam natus neque numquam impedit, ipsum mollitia magni perferendis eius facere. Optio, laborum inventore ex aperiam dolorum, dolores magnam quibusdam molestias alias dignissimos aliquid! Inventore nihil fuga blanditiis corporis facilis dolore. Totam unde quos voluptas, repellendus, velit reiciendis adipisci accusantium dolorum dolore iste nostrum officiis eaque optio veniam numquam voluptatum ipsa. Enim reiciendis quo, voluptate cupiditate recusandae pariatur maiores tempore at sed modi aut cumque similique omnis quae corporis. Libero, aperiam voluptates sed ipsa ea, doloremque rem vero aut, dolorum quisquam sapiente perspiciatis pariatur sit incidunt maxime. Ducimus blanditiis ipsum maiores modi nostrum commodi. Fuga earum veritatis magnam maiores, tempore voluptate totam reiciendis inventore ab quasi corporis, maxime quo harum veniam provident ipsam est! Quasi, ratione explicabo."}, {
  time:"11/11/20", postTitle:"Vintage in Vogue", imageSrc:"blog-image-2.jpg", imageAlt:"Several fancily dressed people.", articleContent:"Consectetur adipisicing elit. Illo dolorum earum reprehenderit! Consequatur totam in dignissimos! Quod qui, atque exercitationem perspiciatis eum est quasi! Corrupti at, unde obcaecati doloribus minima veniam commodi, culpa in repellat distinctio reiciendis quos molestias, error odio! Ad sapiente error nulla et placeat esse voluptatum enim, minus veritatis ratione magni recusandae omnis amet vel delectus distinctio voluptate porro! Quas ullam amet aut nemo fugit natus consectetur dignissimos esse tempora cupiditate! Corrupti unde dolor totam, reprehenderit iusto consectetur quo soluta animi fugit quibusdam error odit, nesciunt, voluptate placeat rerum! Adipisci consequatur, esse eligendi saepe tempora delectus laboriosam deleniti pariatur commodi error repellat quas eos consectetur nobis voluptatem asperiores autem accusamus aliquid facere aliquam. In, eligendi accusantium asperiores error blanditiis quia itaque? Dolore, ut numquam. Autem officia, laudantium doloremque ullam molestiae nobis veniam consectetur molestias odit dolor, fugit, maiores explicabo perferendis. Est vel magnam laudantium. Atque, sit veritatis."
}]

function App() {
  return (
    <body className="App">
      <Header />
      <main>
        <Article article={articles[0]}/>
        <Article article={articles[1]}/>
      </main>
      <Footer />
    </body>
  );
}

export default App;
