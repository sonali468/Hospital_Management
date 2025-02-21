import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Lifestyle() {
  const lifestyleRecommendations = {
    bestFoods: ["Leafy greens", "Berries", "Whole grains", "Lean proteins"],
    worstFoods: ["Processed meats", "Sugary drinks", "Trans fats", "Excessive salt"],
    exercises: ["Brisk walking", "Swimming", "Yoga", "Strength training"],
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Lifestyle Recommendations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Best Foods</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              {lifestyleRecommendations.bestFoods.map((food, index) => (
                <li key={index}>{food}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Foods to Avoid</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              {lifestyleRecommendations.worstFoods.map((food, index) => (
                <li key={index}>{food}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recommended Exercises</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              {lifestyleRecommendations.exercises.map((exercise, index) => (
                <li key={index}>{exercise}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

