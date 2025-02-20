import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="p-5 border-red-300 rounded-xl">
      <h1 className="text-red-500">Products Works</h1>
      <Button>botão</Button>
      <Input placeholder="testando input"/>
    </div>
  );
};

export default ProductPage;
