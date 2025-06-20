import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Profile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Профиль</h1>
      <div className="max-w-md mx-auto">
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
            <Icon name="User" size={32} />
          </div>
          <h2 className="text-xl font-semibold">Пользователь</h2>
        </div>
        <Button className="w-full">Войти</Button>
      </div>
    </div>
  );
};

export default Profile;
