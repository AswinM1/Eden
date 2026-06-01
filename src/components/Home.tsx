
import Button from "./Button";
import Cube from "./Cube";
import Liquid from "./Liquid";
import Card from "./Card";
import Hoversee from "./Hoversee";
import Mask from "./Mask";
import Searchbar from "./Searchbar";

const components = [
  {
    title: "Button",
    desc: "A Button with cool shadows",
    
    preview: (
      <Button></Button>
    ),
  },
  {
    title: "Cube",
    desc: "A cube loader",
   
    preview: (
     <Cube></Cube>
    ),
  },
  {
    title: "Liquid Text",
    desc: "A clippath animated Letter",
    
    preview: (
      <Liquid></Liquid>
    ),
  },
  {
    title: "Liquid card",
    desc: "Aniamted card",
   
    preview: (
      <Card></Card>
    ),
  },
  {
    title: "Mac dock",
    desc: "A mac style dock",

    preview: (
      <Hoversee></Hoversee>
    ),
  },
  {
    title: "Masked scroll",
    desc: "Masked scroll effect",
    
    preview: (
  <Mask></Mask>
    ),
  },
  {
    title: "Searchbar",
    desc: "A simple searchbar",
    
    preview: (
   <Searchbar></Searchbar>
    ),
  },
];

function ShowcasePage() {
  return (
    <div className="h-screen w-full text-white px-6 py-16">
     
      <div className=" mx-auto mb-14">
        <h1 className="text-3xl text-gray-500 justify-center mx-auto self-center flex  font-serif italic">
          Components I build 
          

        </h1>

       
      </div>

      <div className="max-w-xl   mx-auto flex flex-col gap-2">
        {components.map((item, index) => (
          <div
            key={index}
            className="group rounded-3xl border border-white/10 bg-gray-200 overflow-hidden hover:border-white/20 transition"
          >
           
            <div className="h-50 flex items-center justify-center  from-zinc-900 to-black">
              {item.preview}
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between">
                <div>
                 

                  <h2 className="text-xl text-gray-600 font-semibold mt-1">
                    {item.title}
                  </h2>
                </div>

               
              </div>

              <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                {item.desc}
              </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowcasePage;