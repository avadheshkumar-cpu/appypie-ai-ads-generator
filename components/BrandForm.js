import { useState } from "react"

export const BrandForm = ({ value, onChange }) => {
  const [showSuggestions, setShowSuggestions] = useState(false)

  const styleSuggestions = [
    'Modern and minimalist',
    'Playful and colorful',
    'Professional and corporate',
    'Luxury and elegant',
    'Casual and friendly',
    'Bold and edgy',
    'Natural and organic',
    'Tech-savvy and innovative',
    'Vintage and nostalgic',
    'Chic and fashion-forward',
    'Warm and welcoming',
    'Clean and clinical',
    'Street-smart and urban',
    'Whimsical and imaginative',
    'Rugged and adventurous',
    'Futuristic and sleek',
    'Artistic and expressive',
    'Minimalist and monochrome',
    'Energetic and sporty',
    'Cultural and eclectic',
    'Refined and timeless',
    'Smart and trustworthy',
    'Crafted and artisanal',
    'Quirky and offbeat',
    'Youthful and trendy',
    'Serene and peaceful'
  ]

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Brand Style
      </label>
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          rows="3"
          placeholder="Describe your brand style (tone, mood, colors...)"
          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
        />
        
        {showSuggestions && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
            <div className="p-2">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Style Suggestions
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {styleSuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => {
                      onChange(suggestion)
                      setShowSuggestions(false)
                    }}
                    className="text-left p-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
