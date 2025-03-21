import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import FormationCard from '@/components/FormationCard';
import { profileData } from '@/utils/data';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Formation } from '@/utils/data';

const Formations = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [institution, setInstitution] = useState('all');
	const [sortBy, setSortBy] = useState('newest');
	const [filterVisible, setFilterVisible] = useState(false);

	// For now, we'll reuse projects data for the formations page
	const formations: Formation[] = profileData.formations;

	// Get unique institutions from formations
	const uniqueInstitutions = useMemo(() => {
		const institutions = new Set(formations.map(formation => formation.institution));
		return ['all', ...Array.from(institutions)];
	}, [formations]);

	// Sort and filter formations
	const filteredFormations = useMemo(() => {
		let filtered = [...formations];

		// Apply search filter
		if (searchQuery) {
			filtered = filtered.filter(formation =>
				formation.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
				(formation.description && formation.description.toLowerCase().includes(searchQuery.toLowerCase()))
			);
		}

		// Apply institution filter
		if (institution !== 'all') {
			filtered = filtered.filter(formation => formation.institution === institution);
		}

		// Apply sorting
		switch (sortBy) {
			case 'newest':
				return filtered.sort((a, b) => new Date(b.begin).getTime() - new Date(a.begin).getTime());
			case 'name':
				return filtered.sort((a, b) => a.institution.localeCompare(b.institution));
			default:
				return filtered;
		}
	}, [formations, searchQuery, institution, sortBy]);

	return (
		<div className="w-full pt-2">
			<div className="flex flex-col space-y-4 mb-6">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
					<div className="w-full md:w-auto flex-grow relative">
						<Input
							type="text"
							placeholder="Find a formation..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="bg-github-medium border border-github-light text-github-text placeholder-gray-500 pr-10"
						/>
						<div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
							<Search size={16} />
						</div>
					</div>

					<div className="flex space-x-2 w-full md:w-auto">
						<Button
							variant="outline"
							className="border-github-light bg-github-medium text-github-text hover:bg-github-dark"
							onClick={() => setFilterVisible(!filterVisible)}
						>
							<Filter size={16} className="mr-2" />
							Filters
						</Button>
					</div>
				</div>

				{filterVisible && (
					<div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 p-4 bg-github-dark border border-github-light rounded-md">
						<div className="w-full md:w-1/2">
							<label className="block text-sm text-github-text mb-1">Institution</label>
							<Select value={institution} onValueChange={setInstitution}>
								<SelectTrigger className="bg-github-medium border-github-light text-github-text">
									<SelectValue placeholder="Select institution" />
								</SelectTrigger>
								<SelectContent className="bg-github-medium border-github-light">
									<SelectGroup>
										{uniqueInstitutions.map((inst) => (
											<SelectItem key={inst} value={inst} className="text-github-text">
												{inst}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>

						<div className="w-full md:w-1/2">
							<label className="block text-sm text-github-text mb-1">Sort by</label>
							<Select value={sortBy} onValueChange={setSortBy}>
								<SelectTrigger className="bg-github-medium border-github-light text-github-text">
									<SelectValue placeholder="Sort by" />
								</SelectTrigger>
								<SelectContent className="bg-github-medium border-github-light">
									<SelectGroup>
										<SelectItem value="newest" className="text-github-text">Newest first</SelectItem>
										<SelectItem value="name" className="text-github-text">Name</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>
				)}

				{(institution !== 'all' || sortBy !== 'newest' || searchQuery) && (
					<div className="flex flex-wrap gap-2 mt-2">
						{institution !== 'all' && (
							<Badge variant="outline" className="bg-github-dark text-github-blue border-github-blue">
								Institution: {institution}
							</Badge>
						)}
						{sortBy !== 'newest' && (
							<Badge variant="outline" className="bg-github-dark text-github-blue border-github-blue">
								Sort: {sortBy === 'name' ? 'Name' : 'Newest first'}
							</Badge>
						)}
						{searchQuery && (
							<Badge variant="outline" className="bg-github-dark text-github-blue border-github-blue">
								Search: {searchQuery}
							</Badge>
						)}
					</div>
				)}
			</div>

			<div className="space-y-4">
				{filteredFormations.length > 0 ? (
					filteredFormations.map((formation, index) => (
						<div key={formation.id} className={`slide-up ${index > 0 ? `delay-${Math.min(index, 3) * 100}` : ''}`}>
							<FormationCard formation={formation} />
						</div>
					))
				) : (
					<div className="text-center p-8 border border-github-light bg-github-dark rounded-md">
						<p className="text-github-text">No formations found matching your filters.</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Formations;
