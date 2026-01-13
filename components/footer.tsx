// components/footer.tsx

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Game Overview", "Version Comparison", "Buying Guide", "User Reviews", "FAQ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-orange-600 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Contact</h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm text-gray-700">info@chickenroad2.pk</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-sm text-gray-700">+92 21 3587-8528</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} Chicken Road 2 Guide. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-xs">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-xs">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-xs">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}