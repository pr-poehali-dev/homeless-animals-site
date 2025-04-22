
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const HowToHelp = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Как вы можете помочь</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-4xl mr-2">🏠</span>
                <span>Приютить питомца</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Самый лучший способ помочь — это забрать животное домой. Наши питомцы привиты, стерилизованы и готовы к переезду в новую семью.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-4xl mr-2">💰</span>
                <span>Финансовая помощь</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ваши пожертвования помогают нам покупать корм, лекарства и оплачивать ветеринарные услуги для наших подопечных.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span className="text-4xl mr-2">🤲</span>
                <span>Стать волонтёром</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Мы всегда рады новым волонтёрам, которые могут помочь с уходом за животными, проведением мероприятий или транспортировкой.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
