export default function BudgetSection() {
    return (
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">Budget Overview</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Student Stipends: $15,000</li>
          <li>Committee Operations: $500</li>
          <li>Faculty Honorarium: $1,000</li>
          <li>Marketing & Outreach: $250</li>
          <li>Technology Tools: $1,000</li>
        </ul>
      </section>
    );
  }
  